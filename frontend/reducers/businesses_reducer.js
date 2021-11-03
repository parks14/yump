import { RECEIVE_BUSINESSES, RECEIVE_BUSINESS } from "../actions/business_actions";

const businessesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_BUSINESSES:
            return action.businesses;
        case RECEIVE_BUSINESS:
            nextState[action.business.id] = action.business;
            return nextState;
        default:
            return oldState;
    }
}

export default businessesReducer;