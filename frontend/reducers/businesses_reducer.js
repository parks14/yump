import { RECEIVE_BUSINESSES, RECEIVE_BUSINESS } from "../actions/business_actions";
import { RECEIVE_REVIEW } from "../actions/review_actions";

const businessesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_BUSINESSES:
            return action.businesses;
        case RECEIVE_BUSINESS:
            return Object.assign(nextState, action.business);
        case RECEIVE_REVIEW:
            const business = nextState[action.res.business_id]
            business.reviews[action.res.id] = action.res
            return nextState;
        default:
            return oldState;
    }
}

export default businessesReducer;