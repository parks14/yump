import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class BusinessDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.business) {
            return null
        } else {
        return (
        <div className="business-page-container">
            <div className="business-header">
                <div className="business-name">{this.props.business.name}</div>
                <div className="rating">Rating</div>
                <div className="price-category-container">
                    <div className="price">{this.props.business.price}</div>
                    <div>{this.props.business.category}</div>
                </div>
                <div className="hours">{this.props.business.hours}</div>
            </div>
            <div className="right-navbar">
                <a href={this.props.business.website} className="website"></a>
                <div className="number">{this.props.business.phone_number}</div>
                <div className="address">
                    {this.props.business.address} 
                    {this.props.business.city}, {this.props.business.state} 
                    {this.props.business.zip_code}
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
                            <div className="street-address">{this.props.business.address}</div>
                            <div className="city-state">
                                {this.props.business.city}, {this.props.business.state} {this.props.business.zip_code}
                            </div>
                        </div>
                    </div>
                    <div className="hours-container">
                        <div>Mon {this.props.business.hours}</div>
                        <div>Tue {this.props.business.hours}</div>
                        <div>Wed {this.props.business.hours}</div>
                        <div>Thu {this.props.business.hours}</div>
                        <div>Fri {this.props.business.hours}</div>
                        <div>Sat {this.props.business.hours}</div>
                        <div>Sun {this.props.business.hours}</div>
                    </div>
                </div>
                <div className="reviews-container">Recommended Reviews
                    <div className="write-review-container">
                        <p>Start your review of {this.props.business.name}.</p>
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