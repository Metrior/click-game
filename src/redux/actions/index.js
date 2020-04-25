export const SET_PLAYER_NAME = 'SET_PLAYER_NAME';
export const SET_EASY_MODE = 'SET_EASY_MODE';
export const SET_NORMAL_MODE = 'SET_NORMAL_MODE';
export const SET_HARD_MODE = 'SET_HARD_MODE';
export const START_GAME = 'START_GAME';
export const CREATE_GRID = 'CREATE_GRID';
export const CHOOSE_RANDOM_ELEMENT = 'CHOOSE_RANDOM_ELEMENT';
export const CHANGE_COLOR_TO_GREEN = 'CHANGE_COLOR_TO_GREEN';
export const CHANGE_COLOR_TO_RED = 'CHANGE_COLOR_TO_RED';
export const PLAYER_SCORE = 'PLAYER_SCORE';
export const COMPUTER_SCORE = 'COMPUTER_SCORE';
export const PLAYER_WINS = 'PLAYER_WINS';
export const COMPUTER_WINS = 'COMPUTER_WINS';
export const NO_WINNER = 'NO_WINNER';
export const CLEAR_WINNER = 'CLEAR_WINNER';

export const setSettings = (mode) => {
    return async (dispatch, getState) => {
        await dispatch(setMode(mode))
        const {sideSize} = getState().settings;
        await dispatch(createArray(sideSize))
    }
};

export const setName = (name) => {
    return {
        type: SET_PLAYER_NAME,
        name: name
    }
};

export const setMode = (mode) => {
    if (mode==='easy Mode') {
        return {
            type: SET_EASY_MODE,
            payload: {
                mode: 'easy Mode',
                sideSize: 5,
                delay: 2000,
            }
        }
    } else if (mode==='normal Mode') {
        return {
            type: SET_NORMAL_MODE,
            payload: {
                mode: 'normal Mode',
                sideSize: 10,
                delay: 1000,
            }
        }
    } else if (mode==='hard Mode') {
        return {
            type: SET_HARD_MODE,
            payload: {
                mode: 'hard Mode',
                sideSize: 15,
                delay: 900,
            }
        }
    }
};

export const runGame = () => {
    return async (dispatch, getState) => {
        await dispatch(startGame())
        const {array, chosenElements} = getState().game;
        await dispatch(chooseRandom(array, chosenElements))
    }
};

export const startGame = () => {
    return {
        type: START_GAME,
    }
};

export const createArray = (gridSide) => {
    let newArray = []
    while (newArray.length<gridSide*gridSide) {
        newArray.push("white")
    }
    return {
        type: CREATE_GRID,
        array: newArray
    }
}

export const chooseRandom = (array, chosenElements) => {
    let elementId = Math.floor(Math.random() * array.length);
    if (chosenElements.includes(elementId)){
        return (dispatch)=>{
            dispatch(chooseRandom(array, chosenElements))

        }
    } else {
        return {
            type: CHOOSE_RANDOM_ELEMENT,
            elementId: elementId
        }
    }
}

export const submitColorChange = (color) => {
    return async (dispatch, getState) => {
        const {name} = getState().settings;
        await dispatch(changeBlockColor(color))
        await dispatch(calculateScore(color))
        const {playerScore, computerScore, array, chosenElements} = getState().game;
        await dispatch(checkWinner(playerScore, computerScore, array, name))
        const {winner} = getState().game;
        if (!winner){
            await dispatch(chooseRandom(array, chosenElements))
        }
    }
}

export const changeBlockColor = (color, elementId) => {
    if (color==="green"){
        return {
            type: CHANGE_COLOR_TO_GREEN,
            color: color
        }
    } else if (color==="red"){
        return {
            type: CHANGE_COLOR_TO_RED,
            color: color
        }
    }
};

export const calculateScore = (color) => {
    if (color==="green"){
        return {
            type: PLAYER_SCORE
        }
    } else if (color==="red"){
        return {
            type: COMPUTER_SCORE
        }
    }
}

export const checkWinner = (playerScore, computerScore, array, name) => {
    if (playerScore>=(Math.ceil(array.length/2))){
        let today = new Date();
        let time = today.getHours() + ":" + (today.getMinutes()<10?'0':'') + today.getMinutes() + ":" + (today.getSeconds()<10?'0':'') + today.getSeconds();
        let date = today.getFullYear()+'/' + (today.getMonth()<10?'0':'') + (today.getMonth()+1)+'/' + (today.getDate()<10?'0':'') + today.getDate();
        return {
            type: PLAYER_WINS,
            winner: {name: name, date: date, time: time}
        }
    } else if (computerScore>=(Math.ceil(array.length/2))){
        return {
            type: COMPUTER_WINS
        }
    } else return {
        type: NO_WINNER
    }
}

export const loadState = () => {
    try {
        const winnersList = localStorage.getItem('winnersList');
        if (winnersList === null) {
            return undefined;
        }
        return {"game":{"winnersList":JSON.parse(winnersList)}}
    } catch (err) {
        return undefined;
    }
};

export const saveState = (winners) => {
    try {
        const winnersList = JSON.stringify(winners);
        localStorage.setItem('winnersList', winnersList);
    } catch {
        return null
    }
};

export const clearWinner = () => {
    return {
        type: CLEAR_WINNER
    }
};

export const setNewName = (name) => {
    return async (dispatch, getState)=>{
        const {winner} = getState().settings;
        if (winner) {
            await dispatch(clearWinner())
        }
        await dispatch(setName(name))
    }
};
