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

const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
});

const removeReview = review => ({
    type: REMOVE_REVIEW,
    review
});

const receiveReviewErrors = errors => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
});

export const clearReviewErrors = () => ({
    type: CLEAR_REVIEW_ERRORS,
})

export const fetchReviews = () => dispatch => {
    return (
        ReviewAPIUtil.fetchReviews()
            .then(reviews => 
                dispatch(receiveReviews(reviews))
            )
    )
};

export const fetchReview = reviewId => dispatch => {
    return (
        ReviewAPIUtil.fetchReview(reviewId)
            .then(review => 
                dispatch(receiveReview(review))
            )
    )
};

export const createReview = review => dispatch => {
    return (
        ReviewAPIUtil.createReview(review)
            .then(review => {
                dispatch(receiveReview(review));
                dispatch(clearReviewErrors());
            }, err => dispatch(receiveReviewErrors(err.responseJSON)))
    )
};

export const updateReview = review => dispatch => {
    return (
        ReviewAPIUtil.updateReview(review)
            .then(review => {
                dispatch(receiveReview(review));
                dispatch(clearReviewErrors());
            }, err => dispatch(receiveReviewErrors(err.responseJSON)))
    )
};

export const deleteReview = review => dispatch => {
    return (
        ReviewAPIUtil.deleteReview(review)
            .then(review => {
                dispatch(removeReview(review));
                dispatch(clearReviewErrors());
            }, err => dispatch(receiveReviewErrors(err.responseJSON)))
    )
};
