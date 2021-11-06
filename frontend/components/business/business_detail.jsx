import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class BusinessDetail extends React.Component {
    render() {
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
                <div className="business-name">{business.name}</div>
                <div className="rating">Rating</div>
                <div className="price-category-container">
                    <div className="price">{business.price}</div>
                    <div>{business.category}</div>
                </div>
                <div className="hours">{business.hours}</div>
            </div>
            <div className="right-navbar">
                <a href={business.website} className="website"></a>
                <div className="number">{business.phone_number}</div>
                <div className="address">
                    {business.address} 
                    {business.city}, {business.state} 
                    {business.zip_code}
                </div>
            </div>
            <div className="details-container">
                <div className="button-container">
                    <button className="write-review-button" type="submit">Write a Review</button>
                </div>
                <div className="location-hours-container">
                    <div className="location">
                        <div className="map-snippet"></div>
                        <div className="address">
                            <div className="street-address">{business.address}</div>
                            <div className="city-state">
                                {business.city}, {business.state} {business.zip_code}
                            </div>
                        </div>
                    </div>
                    <div className="hours-container">
                        <div>Mon {business.hours}</div>
                        <div>Tue {business.hours}</div>
                        <div>Wed {business.hours}</div>
                        <div>Thu {business.hours}</div>
                        <div>Fri {business.hours}</div>
                        <div>Sat {business.hours}</div>
                        <div>Sun {business.hours}</div>
                    </div>
                </div>
                <div className="reviews-container">Recommended Reviews
                    <div className="write-review-container">
                        <p>Start your review of {business.name}.</p>
                    </div>
                    <div className="reviews-container">
                        <p>Reviews</p>
                    </div>
                </div>
            </div>
        </div>
    ) 
    }}
    
};

export default withRouter(BusinessDetail);