import * as ReviewAPIUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const CLEAR_REVIEW_ERRORS = "CLEAR_REVIEW_ERRORS";

const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews
});

const receiveReview = res => ({
    type: RECEIVE_REVIEW,
    res
});

const removeReview = review => ({
    type: REMOVE_REVIEW,
    review
});

const receiveReviewErrors = errors => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
});

export const clearReviewErrors = errors => ({
    type: CLEAR_REVIEW_ERRORS,
    errors
})

export const fetchReviews = businessId => dispatch => {
    return (
        ReviewAPIUtil.fetchReviews(businessId)
            .then(reviews => dispatch(receiveReviews(reviews)))
    )
};

export const fetchReview = (businessId, reviewId) => dispatch => {
    return (
        ReviewAPIUtil.fetchReview(businessId, reviewId)
            .then(review => dispatch(receiveReview(review)))
    )
};

export const createReview = (review, businessId) => dispatch => {
    return (
        ReviewAPIUtil.createReview(review, businessId)
            .then(review => (
                dispatch(receiveReview(review))
            ))
    )
};

export const updateReview = (review, businessId) => dispatch => {
    return (
        ReviewAPIUtil.updateReview(review, businessId)
            .then(review => (
                dispatch(receiveReview(review))
            ), err => (
                dispatch(receiveReviewErrors(err.responseJSON))
            ))
    )
};

export const deleteReview = (review, businessId) => dispatch => {
    return (
        ReviewAPIUtil.deleteReview(review, businessId)
            .then(() => (
                dispatch(removeReview(review))
            ), err => (
                dispatch(receiveReviewErrors(err.responseJSON))
            ))
    )
};
