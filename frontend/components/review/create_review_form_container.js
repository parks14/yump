import { connect } from "react-redux";
import { createReview, clearReviewErrors } from "../../actions/review_actions";
import { fetchBusiness } from "../../actions/business_actions";
import CreateReviewForm from "./create_review_form";

const mSTP = (state, ownProps) => {
    return {
        review: {
            body: '',
            rating: 0
        },
        business: state.entities.businesses[ownProps.match.params.businessId],
        businessId: ownProps.match.params.businessId,
        currentUserId: state.session.id,
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.reviews,
        formType: 'Create Review'
    }
};

const mDTP = dispatch => {
    return {
        fetchBusiness: businessId => dispatch(fetchBusiness(businessId)),
        processForm: review => dispatch(createReview(review)),
        clearReviewErrors: () => dispatch(clearReviewErrors())
    }
};

export default connect(mSTP, mDTP)(CreateReviewForm);