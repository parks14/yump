import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchBusiness } from "../../actions/business_actions";
import NavbarSearchContainer from "../navbar/navbar_search_container";
import BusinessDetail from "./business_detail";

const BusinessShow = ({ business, fetchBusiness, match }) => {
    useEffect (
        () => {
            fetchBusiness(match.params.businessId)
        }, 
        []
    )

    return (
        <div >
            <NavbarSearchContainer />
            <BusinessDetail business={business} fetchBusiness={fetchBusiness}/>
        </div>
    )
};

export default BusinessShow;