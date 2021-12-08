import React from "react";

class SuggestionItem extends React.Component {
    constructor(props) {
        super(props);
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

    render() {
        const { business } = this.props;
        return (
            <div className="suggestion-business-container">
                <img src={business.photoUrls[0]} />
                <div className="business-info">
                    <h2>{business.name}</h2>
                    <div>{this.ratingImage()} {this.reviewCount()}</div>
                    <p>{business.category}</p>
                    <p>{business.city}, {business.state}</p>
                </div>
            </div>
        )
    }
}

export default SuggestionItem;