import React from "react";
import ReviewListItem from "./review_list_item";
import { withRouter } from "react-router";
import { deleteReview } from "../../actions/review_actions";

class ReviewList extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.reviews;
    }

    // componentDidMount() {
    //     if (this.props.fetchReviews) {
    //         this.props.fetchReviews(this.props.match.params.businessId)
    //     }
    // };

    // componentDidUpdate(prevProps, prevState) {
    //     // debugger
    //     if (prevProps.reviews && (Object.values(this.props.reviews).length !== Object.values(prevProps.reviews).length)) {
    //         this.props.fetchReviews(this.props.match.params.businessId)
    //     }
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     debugger
    //     if ((prevProps.reviews).length !== (this.props.reviews).length) {
    //         this.props.fetchReviews(this.props.match.params.businessId)
    //     }
    // }

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