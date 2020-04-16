import {RUN_GAME} from "../actions";

const initialSettingsState = {
    runGame: false
};

const runGame = (state = initialSettingsState, action) => {
    switch (action.type) {
        case RUN_GAME:
            console.log(action.payload);
            return {
                ...state,
                runGame:!state
            };
        default:
            return state
    }
};

export default runGame;
