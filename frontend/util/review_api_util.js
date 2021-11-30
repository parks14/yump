// export const fetchReviews = businessId => (
//     $.ajax({
//         method: "GET",
//         url: `/api/businesses/${businessId}/reviews`
//     })
// );

export const fetchReviews = () => (
    $.ajax({
        method: "GET",
        url: `/api/reviews`
    })
);

// export const fetchReview = (businessId, reviewId) => (
//     $.ajax({
//         method: 'GET',
//         url: `/api/businesses/${businessId}/reviews/${reviewId}`
//     })
// );
export const fetchReview = reviewId => (
    $.ajax({
        method: 'GET',
        url: `/api/reviews/${reviewId}`
    })
);

// export const createReview = (review, businessId) => (
//     $.ajax({
//         method: 'POST',
//         url: `/api/businesses/${businessId}/reviews`,
//         data: { review }
//     })
// );
export const createReview = review => (
    $.ajax({
        method: 'POST',
        url: `/api/reviews`,
        data: { review }
    })
);

// export const updateReview = (review, businessId) => (
//     $.ajax({
//         method: 'PATCH',
//         url: `/api/businesses/${businessId}/reviews/${review.id}`,
//         data: { review }
//     })
// );
export const updateReview = review => (
    $.ajax({
        method: 'PATCH',
        url: `/api/reviews/${review.id}`,
        data: { review }
    })
);

// export const deleteReview = (review, businessId) => (
//     $.ajax({
//         method: 'DELETE',
//         url: `/api/businesses/${businessId}/reviews/${review.id}`
//     })
// )
export const deleteReview = review => (
    $.ajax({
        method: 'DELETE',
        url: `/api/reviews/${review.id}`
    })
)