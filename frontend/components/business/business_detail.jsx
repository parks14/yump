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

    // componentDidUpdate(prevProps, prevState) {
    //     debugger
    //     if (prevProps.business.reviews !== this.props.business.reviews) {
    //         this.props.fetchBusiness(this.props.match.params.businessId)
    //     }
    // }


    render() {
        debugger
        const { business } = this.props;

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
                    <div className="rating">{business.average_rating}</div>
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
                        <div className="map-snippet">map</div>
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
                        <p>Start your review of {business.name}.</p>
                    </div>
                    <div className="review-container">
                        <ReviewListContainer reviews={business.reviews} />
                    </div>
                </div>
            </div>
        </div>
    ) 
    }}
};

export default withRouter(BusinessDetail);