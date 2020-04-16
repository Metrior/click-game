import {SET_EASY_MODE, SET_NORMAL_MODE, SET_HARD_MODE} from "../actions"

const initialSettingsState = {
    sideSize: 2,
    delay: 1000,
    name: 'Bob'
};

const settings = (state = initialSettingsState, action) => {
    switch (action.type) {
        case SET_EASY_MODE:
        case SET_NORMAL_MODE:
        case SET_HARD_MODE:
            return {
                ...state,
                sideSize: action.payload.sideSize,
                delay: action.payload.delay,
                name: action.payload.name,
            };
        default:
            return state
    }
};

export default settings;
