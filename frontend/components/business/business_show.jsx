import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchBusiness } from "../../actions/business_actions";
import NavbarSearchContainer from "../navbar/navbar_search_container";
import BusinessDetail from "./business_detail";

const BusinessShow = ({ business, fetchBusiness, match, currentUser, reviews }) => {
    useEffect (
        () => {
            fetchBusiness(match.params.businessId)
        }, 
        []
    )

    return (
        <div >
            <NavbarSearchContainer />
            <BusinessDetail 
                business={business}
                reviews={reviews}
                currentUser={currentUser} 
                fetchBusiness={fetchBusiness}
            />
        </div>
    )
};

export default BusinessShow;