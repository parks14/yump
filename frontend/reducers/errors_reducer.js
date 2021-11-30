import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import ReviewsErrorsReducer from './reviews_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    reviews: ReviewsErrorsReducer
});

export default errorsReducer;