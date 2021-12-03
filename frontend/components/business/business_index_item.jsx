import React from "react";
import { withRouter } from "react-router-dom";
import BusinessShowContainer from "./business_show_container";

class BusinessIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const businessId = this.props.business.id;
        this.props.history.push(`businesses/${businessId}`);
    }

    ratingImage() {
        const { review, business } = this.props;
        if (business.average_rating === 1) {
            return (
                <div><img src={window.rating1} /></div>
            )
        } else if (business.average_rating > 1 && business.average_rating <= 1.5) {
            return (
                <div><img src={window.rating15} /></div>
            )
        } else if (business.average_rating > 1.5 && business.average_rating <= 2) {
            return (
                <div><img src={window.rating2} /></div>
            )
        } else if (business.average_rating > 2 && business.average_rating <= 2.5) {
            return (
                <div><img src={window.rating25} /></div>
            )
        } else if (business.average_rating > 2.5 && business.average_rating <= 3) {
            return (
                <div><img src={window.rating3} /></div>
            )
        } else if (business.average_rating > 3 && business.average_rating <= 3.5) {
            return (
                <div><img src={window.rating35} /></div>
            )
        } else if (business.average_rating > 3.5 && business.average_rating <= 4) {
            return (
                <div><img src={window.rating4} /></div>
            )
        } else if (business.average_rating > 4 && business.average_rating <= 4.5) {
            return (
                <div><img src={window.rating45} /></div>
            )
        } else if (business.average_rating > 4.5 && business.average_rating <= 5) {
            return (
                <div><img src={window.rating5} /></div>
            )
        }
    }

    reviewCount() {
        const { reviews, business } = this.props;
        let count = 0; 
        reviews.forEach(review => {
            if (review.business_id === business.id) {
                count += 1
            }
        })
        return count;
    }

    randomReview() {
        const { reviews, business } = this.props;
        const reviewsArr = Object.values(reviews);
        const result = reviewsArr.filter(review =>
            review.business_id === business.id);

        return (
            <div>
                <i className="far fa-comment-alt fa-1x"></i> {result[0].body}
            </div>
        );
    }

    render() {
        const { business, businesses } = this.props;
        return (
            <div className="business-index-item" onClick={this.handleClick}>
                <div className="index-item-info">
                    <div className="img-container">
                        <img className="index-photo" src={business.photoUrls[0]} />
                    </div>
                    <div className="info-container">
                        <div className="index-item-name">{businesses.indexOf(business) + 1}. {business.name}</div>
                        <div className="average-rating-container">
                            <div>
                                {this.ratingImage()}
                            </div>
                            <div>
                                {this.reviewCount()}
                            </div> 
                        </div>
                        <div>
                            <div className="index-item-category">{business.category}</div>
                        </div>
                        <div className="random-review">
                            {this.randomReview()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default withRouter(BusinessIndexItem);