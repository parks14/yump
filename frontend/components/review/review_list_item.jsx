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
            this.props.deleteReview(this.props.review, this.props.review.business_id)
                .then(() => window.location.reload())
    }

    editDeleteDropdown() {
        const { review, currentUser } = this.props;
        // debugger
        if (review.author_id === this.props.currentUser) {
            return (
                <div className="dropdown-wrapper">
                    <input type="checkbox" id="input" />
                    <label htmlFor="input" className="button">
                        <span className="dropdown-icon"><i className="fas fa-ellipsis-h"></i></span>
                    </label>
                    <div className="dropdown-options">
                        <ul>
                            <li>
                                <Link to={`/businesses/${review.business_id}/reviews/${review.id}/edit`}>Write an update</Link>
                            </li>
                            <li><button onClick={this.handleDelete}>Remove review</button></li>
                        </ul>
                    </div>
                </div>
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
                <div className="author-container">
                    <div>{review.author.first_name} {review.author.last_name[0]}</div>
                </div>
                <div>{this.editDeleteDropdown()}</div>
                <div className="review-rating-container">
                    <div className="rating">Rating: {review.rating}</div>
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