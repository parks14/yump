import React from 'react';
import { connect } from 'react-redux';
import { fetchReviews, updateReview, deleteReview } from '../../actions/review_actions';
import { fetchBusiness } from '../../actions/business_actions';
import ReviewListItem from './review_list_item';
import ReviewList from './review_list';
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
    const business = state.entities.businesses[ownProps.match.params.businessId]
    return {
        reviews: business.reviews,
        businesses: state.entities.businesses,
        businessId: ownProps.match.params.businessId,
        currentUserId: state.session.id,
        currentUser: state.entities.users[state.session.id]
    }
};

const mDTP = dispatch => {
    return {
        fetchReviews: businessId => dispatch(fetchReviews(businessId)),
        fetchBusiness: businessId => dispatch(fetchBusiness(businessId)),
        updateReview: (review, businessId) => dispatch(updateReview(review, businessId)),
        deleteReview: reviewId => dispatch(deleteReview(reviewId))
    }
};

export default withRouter(connect(mSTP, mDTP)(ReviewList));
