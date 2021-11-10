import { 
    RECEIVE_REVIEWS, 
    RECEIVE_REVIEW,
    REMOVE_REVIEW
} from "../actions/review_actions";

const reviewsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_REVIEWS:
            return action.reviews; 
        case RECEIVE_REVIEW:
            return Object.assign({}, { [action.res.review.id]: action.res.review });
        case REMOVE_REVIEW:
            delete nextState[action.review.id]
            return nextState;
        default:
            return oldState;
    }
};

export default reviewsReducer;