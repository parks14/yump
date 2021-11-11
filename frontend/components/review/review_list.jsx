import React from "react";
import ReviewListItem from "./review_list_item";
import { withRouter } from "react-router";
import { deleteReview } from "../../actions/review_actions";

class ReviewList extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.reviews;
    }

    render() {
        if (!this.props.reviews) {
            return null
        } else {
            const reversedReviews = Object.values(this.props.reviews).reverse();
            return (
                <div>
                    {
                        reversedReviews.map(review => (
                            <ReviewListItem
                                review={review}
                                currentUser={this.props.currentUserId}
                                key={review.id}
                                deleteReview={this.props.deleteReview}
                                fetchBusiness={this.props.fetchBusiness}
                            />
                        ))
                    }
                </div>
            )
        }
    }
};

export default withRouter(ReviewList);