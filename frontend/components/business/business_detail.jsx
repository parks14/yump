import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import ReviewList from "../review/review_list";
import ReviewListContainer from "../review/review_list_item_container";

class BusinessDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.business;
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
        const { business } = this.props;
        if (business.reviews) {
            return (
                (Object.values(business.reviews)).length
            )
        } else {
            return "0"
        }
    }

    render() {
        // debugger
        const { business, currentUser, reviews } = this.props;
        if (!this.props.business) {
            return null
        } else {
        return (
        <div className="business-page-container">
            <div className="business-header">
                <div className="business-img-container">
                    {business.photoUrls.map((photo, i) => {
                        return (
                           <img className="business-img" 
                                src={photo} 
                                key={`img-${i}`}
                                /> 
                        )
                    })}
                </div>
                <div className="business-header-detail">
                    <div className="business-name">{business.name}</div>
                    <div className="rating">
                        {this.ratingImage()} 
                        <div className="review-text">
                            {this.reviewCount()} reviews
                        </div>
                    </div>
                    <div className="price-category-container">
                            <div className="price">{business.price} - {business.category}</div>
                    </div>
                    <div className="hours">{business.hours}</div>
                </div>
            </div>
            <div className="right-sidebar">
                <div className="website-container">
                    <a href={business.website} className="website" target="_blank">{business.website}</a>
                    <i className="fas fa-external-link-alt"></i>
                </div>
                <div className="number-container">
                    <div className="number">{business.phone_number}</div>
                    <i className="fas fa-phone-alt"></i>
                </div>
                <div className="address-container">
                    <p>{business.address} {business.city}, {business.state} {business.zip_code}</p>
                    <i className="fas fa-directions"></i>
                </div>
            </div>
            <div className="details-container">
                <div className="button-container">
                    <Link to={`/businesses/${business.id}/reviews/new`}>
                        <button className="write-review-button"><i className="far fa-star"></i> Write a Review</button>
                    </Link>
                </div>
                <div className="location-hours-container">
                    <p className="location-title">Location & Hours</p>
                    <div className="location">
                        <div className="map-snippet">
                            <img src={window.map} />
                        </div>
                        <div className="address">
                            <div className="street-address">{business.address}</div>
                            <div className="city-state">
                                {business.city}, {business.state} {business.zip_code}
                            </div>
                        </div>
                    </div>
                    <div className="hours-container">
                        <div className="days">
                            <p>Mon</p>
                            <p>Tue</p>
                            <p>Wed</p>
                            <p>Thu</p>
                            <p>Fri</p>
                            <p>Sat</p>
                            <p>Sun</p>
                        </div>
                        <div className="hours">
                            <p>{business.hours}</p>
                            <p>{business.hours}</p>
                            <p>{business.hours}</p>
                            <p>{business.hours}</p>
                            <p>{business.hours}</p>
                            <p>{business.hours}</p>
                            <p>{business.hours}</p>
                        </div>
                    </div>
                </div>
                <div className="reviews-list-container">
                    <div className="reviews-title">Recommended Reviews</div>
                    <div className="write-review-container">
                        <div className="author-container">
                            <div className="author-icon">
                                <i className="fas fa-user-circle fa-3x"></i>
                            </div>
                            {/* <div className="author-name">{currentUser[1]} {currentUser[2][0]}</div> */}
                        </div>
                        <Link to={`/businesses/${business.id}/reviews/new`} className="create-review-link">Start your review of {business.name}.</Link>
                    </div>
                    <div className="review-container">
                        <ReviewListContainer reviews={reviews} />
                    </div>
                </div>
            </div>
        </div>
    ) 
    }}
};

export default withRouter(BusinessDetail);