import React from "react";
import BusinessIndexItem from "./business_index_item";
import NavbarSearchContainer from "../navbar/navbar_search_container";
import FilterSidebarContainer from "../filter/filter_sidebar_container";
import BusinessMap from "../business_map/business_map";
import Footer from "../footer/footer";

class BusinessIndex extends React.Component {
    componentDidMount() {
        this.props.fetchBusinesses();
        this.props.fetchReviews();
    }

    render() {
        const { businesses, reviews } = this.props;
        return (
            <div>
                <div className="top-header-business">
                    <NavbarSearchContainer />
                </div>
                <div className="index-body-container">
                    <div>
                        <FilterSidebarContainer />
                    </div>
                    <div className="business-body">
                        <h1 className="result-title">All Results</h1>
                        {
                            businesses.map(business => (
                                <BusinessIndexItem
                                    business={business}
                                    reviews={reviews}
                                    key={business.id}
                                    businesses={businesses}
                                />
                            ))
                        }
                    </div>
                    <BusinessMap 
                        businesses={businesses}
                    />
                </div>
                <div className="index-footer">
                    <Footer />
                </div>
            </div>
        )
    }
};

export default BusinessIndex;