import { RECEIVE_BUSINESSES, RECEIVE_BUSINESS } from "../actions/business_actions";
import { RECEIVE_REVIEW } from "../actions/review_actions";

const businessesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_BUSINESSES:
            return action.businesses;
        case RECEIVE_BUSINESS:
            nextState[action.business.id] = action.business;
            return nextState;
        case RECEIVE_REVIEW:
            const { review, average_rating } = action;
            nextState[review.business_id].reviewIds.push(review.id);
            nextState[review.business_id].average_rating = average_rating;
            return nextState;
        default:
            return oldState;
    }
}

export default businessesReducer;