import React from "react";
import ReviewListItem from "./review_list_item";
import { withRouter } from "react-router";

class ReviewList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.fetchReviews) {
            this.props.fetchReviews(this.props.match.params.businessId)
        }
    };

    render() {
        // debugger
        if (!this.props.reviews) {
            return null
        } else {
            return (
                <div>
                    {
                        Object.values(this.props.reviews).map(review => (
                            <ReviewListItem
                                review={review}
                                currentUser={this.props.currentUserId}
                                key={review.id}
                            />
                        ))
                    }
                </div>
            )
        }
    }
};

export default withRouter(ReviewList);