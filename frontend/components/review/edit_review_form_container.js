import { connect } from "react-redux";
import { updateReview, fetchReviews, fetchReview } from "../../actions/review_actions";
import { fetchBusiness } from "../../actions/business_actions";
import { clearReviewErrors } from "../../actions/review_actions";
import EditReviewForm from "./edit_review_form";

const mSTP = (state, ownProps) => {
    return {
        review: state.entities.reviews[ownProps.match.params.reviewId],
        business: state.entities.businesses[ownProps.match.params.businessId],
        businessId: ownProps.match.params.businessId,
        currentUserId: state.session.id,
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.review,
        formType: 'Edit Review'
    }
};

const mDTP = dispatch => {
    return {
        fetchBusiness: businessId => dispatch(fetchBusiness(businessId)),
        fetchReviews: businessId => dispatch(fetchReviews(businessId)),
        // fetchReview: (businessId, reviewId) => dispatch(fetchReview(businessId, reviewId)),
        processForm: (review, businessId) => dispatch(updateReview(review, businessId)),
        // clearReviewErrors: () => dispatch(clearReviewErrors())
    }
};

export default connect(mSTP, mDTP)(EditReviewForm);