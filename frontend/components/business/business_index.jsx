import React from "react";
import BusinessIndexItem from "./business_index_item";
import NavbarContainer from "../navbar/navbar_container";
import NavbarSearchContainer from "../navbar/navbar_search_container";

class BusinessIndex extends React.Component {
    componentDidMount() {
        this.props.fetchBusinesses();
    }

    render() {
        const { businesses, currentUser } = this.props;
        return (
            <div>
                <div className="top-header-business">
                    <NavbarSearchContainer />
                </div>
                <div className="business-body">
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
            </div>
        )
    }
};

export default BusinessIndex;