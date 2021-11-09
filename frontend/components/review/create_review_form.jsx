import React from "react";
import { Link } from "react-router-dom";
import NavbarSearchContainer from "../navbar/navbar_search_container";

class CreateReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: this.props.review.body,
            rating: this.props.review.rating,
            author_id: this.props.currentUserId,
            business_id: this.props.businessId
        }
    }

    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.businessId)
    };

    render() {
        const { business } = this.props;

        if (!business) {
            return null
        }   else {
        return (
            <div>
                <div className="top-header-review">
                    <NavbarSearchContainer />
                </div>
                <div className="create-review-container">
                    <div className="review-header-container">
                        <Link to={`/business/${business.id}`} className="review-title">{business.name}</Link>
                        <a href="">Read our review guidelines</a>
                    </div>
                    <div className="review-body-container">
                        <div className="rating-container">
                            
                        </div>
                    </div>
                </div>
            </div>
        )}
    }
}

export default CreateReviewForm;