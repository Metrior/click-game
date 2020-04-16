export const SET_EASY_MODE = 'SET_EASY_MODE';
export const SET_NORMAL_MODE = 'SET_NORMAL_MODE';
export const SET_HARD_MODE = 'SET_HARD_MODE';
export const RUN_GAME = 'RUN_GAME';

export const setSettings = (mode) => {
    if (mode==='easyMode') {
        return {
            type: SET_EASY_MODE,
            payload: {
                sideSize: 5,
                delay: 2000,
            }
        }
    } else if (mode==='normalMode') {
        return {
            type: SET_NORMAL_MODE,
            payload: {
                sideSize: 10,
                delay: 1000,
            }
        }
    } else return {
        type: SET_HARD_MODE,
        payload: {
            sideSize: 15,
            delay: 900,
        }
    }
};

export const runGame = () => {
    return {
        type: RUN_GAME,
    }
};
