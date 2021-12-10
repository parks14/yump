import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchBusiness } from "../../actions/business_actions";
import { fetchReviews } from "../../actions/review_actions";
import NavbarSearchContainer from "../navbar/navbar_search_container";
import BusinessDetail from "./business_detail";
import Footer from "../footer/footer";

const BusinessShow = ({ business, fetchBusiness, fetchReviews, match, currentUser, reviews }) => {
    useEffect (
        () => {
            fetchBusiness(match.params.businessId),
            fetchReviews(match.params.businessId)
        }, 
        []
    )

    return (
        <div>
            <NavbarSearchContainer />
            <BusinessDetail 
                business={business}
                reviews={reviews}
                currentUser={currentUser} 
                fetchBusiness={fetchBusiness}
                fetchReviews={fetchReviews}
            />
            <div className="show-footer"><Footer /></div>
        </div>
    )
};

export default BusinessShow;