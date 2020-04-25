import {
    CHANGE_COLOR_TO_GREEN,
    CHANGE_COLOR_TO_RED,
    CHOOSE_RANDOM_ELEMENT,
    COMPUTER_SCORE,
    COMPUTER_WINS,
    NO_WINNER,
    CREATE_GRID,
    PLAYER_SCORE,
    PLAYER_WINS,
    START_GAME, CLEAR_WINNER
} from "../actions";

const initialSettingsState = {
    gameActive: false,
    elementId: null,
    chosenElements: [],
    array: null,
    playerScore: 0,
    computerScore: 0,
    winner: null,
    winnersList: []
};

const game = (state = initialSettingsState, action) => {
    switch (action.type) {
        case START_GAME:
            return {
                ...state,
                gameActive: true,
                winner: null,
                chosenElements: [],
                playerScore: 0,
                computerScore: 0
            };
        case CREATE_GRID:
            return {
                ...state,
                array: action.array
            }
        case CLEAR_WINNER:
            return {
                ...state,
                winner: null
            }
        case CHOOSE_RANDOM_ELEMENT:
            return {
                ...state,
                chosenElements: [...state.chosenElements, action.elementId],
                array: state.array.map((element, i) => i === action.elementId ?
                    "blue" :
                    element
                ),
                elementId: action.elementId
            }
        case CHANGE_COLOR_TO_GREEN:
            return {
                ...state,
                array: state.array.map((element,i) => i === state.elementId ?
                    "green" :
                    element
                )
            }
        case CHANGE_COLOR_TO_RED:
            return {
                ...state,
                array: state.array.map((element,i) => i === state.elementId ?
                    "red" :
                    element
                )
            }
        case PLAYER_SCORE:
            return {
                ...state,
                playerScore: state.playerScore+1
            }
        case COMPUTER_SCORE:
            return {
                ...state,
                computerScore: state.computerScore+1
            }
        case PLAYER_WINS:
            return {
                ...state,
                winner: "player",
                winnersList: [...state.winnersList, action.winner],
                gameActive: false,
                array: state.array.map(() => "white")
            }
        case COMPUTER_WINS:
            return {
                ...state,
                winner: "computer",
                gameActive: false,
                array: state.array.map(() => "white")
            }
        case NO_WINNER:
            return state
        default:
            return state
    }
};



export default game;
