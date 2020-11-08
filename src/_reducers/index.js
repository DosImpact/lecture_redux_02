import { combineReducers } from 'redux';
import user from './user_reducer';
import counter from "./counter_reducer"

const rootReducer = combineReducers({
    user,
    counter
});

export default rootReducer;