import React from "react";
import BusinessIndexItem from "./business_index_item";
import NavbarContainer from "../navbar/navbar_container";

class BusinessIndex extends React.Component {
    componentDidMount() {
        this.props.fetchBusinesses();
    }

    render() {
        const { businesses, currentUser } = this.props;
        return (
            <div>
                <div className="top-header">
                    <NavbarContainer />
                </div>
                <h1 className="result-title">All Results</h1>
                {
                    businesses.map(business => (
                        <BusinessIndexItem 
                            business={business}
                            key={business.id}
                        />
                    ))
                }
            </div>
        )
    }
};

export default BusinessIndex;