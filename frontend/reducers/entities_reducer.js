import { combineReducers } from 'redux';
import businessesReducer from './businesses_reducer';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    businesses: businessesReducer
});

export default entitiesReducer;