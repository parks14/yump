import SearchResult from "./search_result";
import { fetchBusinesses } from "../../actions/business_actions";
import { fetchReviews } from "../../actions/review_actions";
import { connect } from "react-redux";

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

export default connect(mSTP, mDTP)(SearchResult);