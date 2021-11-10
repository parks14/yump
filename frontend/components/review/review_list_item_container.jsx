import React from 'react';
import { connect } from 'react-redux';
import { fetchReviews, updateReview, deleteReview } from '../../actions/review_actions';
import ReviewListItem from './review_list_item';
import ReviewList from './review_list';
import { withRouter } from 'react-router';

const mSTP = (state, ownProps) => {
    const business = state.entities.businesses[ownProps.match.params.businessId]
    return {
        reviews: business[reviews],
        author: users[review.author_id],
        businesses: state.entities.businesses
    }
};

const mDTP = dispatch => {
    return {
        fetchReviews: businessId => dispatch(fetchReviews(businessId)),
        updateReview: (review, businessId) => dispatch(updateReview(review, businessId)),
        deleteReview: (review, businessId) => dispatch(deleteReview(review, businessId))
    }
};

export default connect(mSTP, mDTP)(ReviewList);
