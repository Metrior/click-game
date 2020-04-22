import { combineReducers } from 'redux'

import settings from "./settings";
import game from "./game";

const rootReducer = combineReducers({
    settings,
    game
});
export default rootReducer
