import { connect } from "react-redux";
import { fetchBusinesses } from "../../actions/business_actions";
import { fetchReviews } from "../../actions/review_actions";
import Suggestion from "./suggestion";

const mSTP = state => {
    return {
        businesses: Object.values(state.entities.businesses),
        reviews: Object.values(state.entities.reviews)
    }
};

const mDTP = dispatch => {
    return {
        fetchBusinesses: () => dispatch(fetchBusinesses()),
        fetchReviews: () => dispatch(fetchReviews())
    }
};

export default connect(mSTP, mDTP)(Suggestion);
