import { connect } from "react-redux";
import { fetchBusiness } from "../../actions/business_actions";
import { fetchReviews } from "../../actions/review_actions";
import BusinessShow from './business_show';

const mSTP = (state, ownProps) => {
    const business = state.entities.businesses[ownProps.match.params.businessId]
    const currentUserId = state.session.id
    return {
        business: business,
        currentUser: state.entities.users[currentUserId]
    };
};

const mDTP = dispatch => ({
    fetchBusiness: businessId => dispatch(fetchBusiness(businessId)),
    fetchReviews: () => dispatch(fetchReviews())
});

export default connect(mSTP, mDTP)(BusinessShow);