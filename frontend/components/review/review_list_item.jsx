import React from 'react';
import { Link } from 'react-router-dom';

class ReviewListItem extends React.Component {
    constructor(props) {
        super(props);
        this.formatDate = this.formatDate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.editDeleteDropdown = this.editDeleteDropdown.bind(this);
    }

    handleDelete() {
        // debugger
            this.props.deleteReview(this.props.review, this.props.review.business_id)
                .then(() => this.props.fetchBusiness(this.props.review.business_id))
    }

    editDeleteDropdown() {
        const { review, currentUser } = this.props;
        // debugger
        if (review.author_id === this.props.currentUser) {
            return (
                <div className="dropdown-wrapper">
                    <button className="drop-button"><i className="fas fa-ellipsis-h fa-1x"></i></button>
                    <div className="dropdown-content">
                        <Link to={`/businesses/${review.business_id}/reviews/${review.id}/edit`} className="write-review-link">Write an update</Link>
                        <a className="remove-review" onClick={(this.handleDelete)}>Remove review</a>
                    </div>
                </div>
            )
        }
    }

    ratingImage() {
        const { review } = this.props;
        if (review.rating === 1) {
            return (
                <div><img src={window.rating1} /></div>
            )
        } else if (review.rating === 2) {
            return (
                <div><img src={window.rating2} /></div>
            )
        } else if (review.rating === 3) {
            return (
                <div><img src={window.rating3} /></div>
            )
        } else if (review.rating === 4) {
            return (
                <div><img src={window.rating4} /></div>
            )
        } else if (review.rating === 5) {
            return (
                <div><img src={window.rating5} /></div>
            )
        }
    }

    formatDate() {
        const date = new Date(this.props.review.created_at);
        return (
            (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear()
        )
    }

    render() {
        const { review } = this.props;
        return (
            <div>
                <div className="reviews-header">
                    <div className="author-container">
                        <div className="author-icon">
                            <i className="fas fa-user-circle fa-3x"></i>
                        </div>
                        <div className="author-name">{review.author.first_name} {review.author.last_name[0]}</div>
                    </div>
                    <div>{this.editDeleteDropdown()}</div>
                </div>
                <div className="review-rating-container">
                    <div className="rating">
                        {this.ratingImage()}
                    </div>
                    <div className="date-created">{this.formatDate()}</div>
                </div>
                <div className="body-container">
                    <div>{review.body}</div>
                </div>
            </div>
        )
    }
};

export default ReviewListItem;