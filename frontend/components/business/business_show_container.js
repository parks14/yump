import { connect } from "react-redux";
import { fetchBusiness } from "../../actions/business_actions";
import { fetchReviews } from "../../actions/review_actions";
import BusinessShow from './business_show';

const mSTP = (state, ownProps) => {
    const business = state.entities.businesses[ownProps.match.params.businessId]
    return {
        business: business,
        currentUserId: state.session.id,
        // reviews: business.reviews
        // currentUser: Object.values(state.entities.users[state.session.id])
    };
};

const mDTP = dispatch => ({
    fetchBusiness: businessId => dispatch(fetchBusiness(businessId)),
    // fetchReviews: businessId => dispatch(fetchReviews(businessId))
    fetchReviews: () => dispatch(fetchReviews())
});

export default connect(mSTP, mDTP)(BusinessShow);