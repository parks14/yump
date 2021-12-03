import { 
    RECEIVE_REVIEWS, 
    RECEIVE_REVIEW,
    REMOVE_REVIEW,
    CLEAR_REVIEW_ERRORS
} from "../actions/review_actions";

const reviewsReducer = (prevState = {}, action) => {
    Object.freeze(prevState);
    let nextState = Object.assign({}, prevState);

    switch (action.type) {
        case RECEIVE_REVIEWS:
            return action.reviews; 
        case RECEIVE_REVIEW:
            nextState[action.review.id] = action.review;
            return nextState;
        case REMOVE_REVIEW:
            delete nextState[action.review.id]
            return nextState;
        case CLEAR_REVIEW_ERRORS:
            return {};
        default:
            return prevState;
    }
};

export default reviewsReducer;