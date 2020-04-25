import {SET_EASY_MODE, SET_NORMAL_MODE, SET_HARD_MODE, SET_PLAYER_NAME} from "../actions"

const initialSettingsState = {
    sideSize: 10,
    delay: 1000,
    name: '',
    mode: 'normal Mode'
};

const settings = (state = initialSettingsState, action) => {
    switch (action.type) {
        case SET_EASY_MODE:
        case SET_NORMAL_MODE:
        case SET_HARD_MODE:
            return {
                ...state,
                mode: action.payload.mode,
                sideSize: action.payload.sideSize,
                delay: action.payload.delay,
            };
        case SET_PLAYER_NAME:
            return {
                ...state,
                name: action.name
            }
        default:
            return state
    }
};

export default settings;
