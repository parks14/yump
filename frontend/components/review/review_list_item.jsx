import React from 'react';

const ReviewListItem = ({ review }) => {
    const { rating, body, created_at } = review;
    const date = new Date(created_at);
    const formateDate = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();

    return (
        <div>
            <div className="author-container">
                <div>{review.author.first_name} {review.author.last_name[0]}</div>
            </div>
            <div className="review-rating-container">
                <div className="rating">Rating: {rating}</div>
                <div className="date-created">{formateDate}</div>
            </div>
            <div className="body-container">
                <div>{body}</div>
            </div>
        </div>
    )
};

export default ReviewListItem;