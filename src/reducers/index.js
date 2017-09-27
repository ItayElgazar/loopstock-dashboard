import { combineReducers } from 'redux';
import users from './listingsReducer';

const rootReducer = combineReducers({
    users
});

export default rootReducer;