import { RECEIVE_REVIEW_ERRORS, CLEAR_REVIEW_ERRORS } from "../actions/review_actions";

const reviewsErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_REVIEW_ERRORS:
            return action.errors;
        case CLEAR_REVIEW_ERRORS:
            return [];
        default:
            return oldState;
    }
};

export default reviewsErrorsReducer;