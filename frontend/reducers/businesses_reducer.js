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
        default:
            return oldState;
    }
}

export default businessesReducer;