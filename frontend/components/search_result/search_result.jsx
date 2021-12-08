import React from "react";
import { withRouter } from "react-router-dom";
import BusinessIndexItem from "../business/business_index_item";
import FilterSidebarContainer from "../filter/filter_sidebar_container";
import NavbarSearchContainer from "../navbar/navbar_search_container";
import BusinessMap from "../business_map/business_map";


class SearchResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            businesses: []
        }
        this.searchBusinesses = this.searchBusinesses.bind(this);
    }
    componentDidMount() {
        this.props.fetchReviews()
        this.props.fetchBusinesses()
        .then(() => this.setState(this.searchBusinesses()))
    }

    componentDidUpdate(prevProps) {
        const { location } = this.props
        if (location.search !== prevProps.location.search) {
            this.searchBusinesses()
        }
    }

    searchBusinesses() {
        const { businesses, location } = this.props;
        let params = new URLSearchParams(location.search);
        let find = params.get("find").replace('%20', ' ').toLowerCase();
        let near = params.get("near").replace('%20', ' ').toLowerCase();
        let results = [];

        if (find === '' && near === '') {
            results = businesses
        }
        if (find !== '') {
            results = businesses.filter(business => (
                business.name.toLowerCase().includes(find) || business.category.toLowerCase().includes(find)
            ))
        }
        if (near !== '') {
            if (find === '') {
                results = businesses.filter(business => (
                    business.city.toLowerCase().includes(near) ||
                    business.state.toLowerCase().includes(near) ||
                    business.zip_code.includes(near)
                ))
            } else if (find !== '') {
                results = results.filter(business => (
                    business.city.toLowerCase().includes(near) ||
                    business.state.toLowerCase().includes(near) ||
                    business.zip_code.includes(near)
                ))
            }
        }

        this.setState({ businesses: results })
    }
    

    render() {
        const { businesses } = this.state;
        const { reviews } = this.props;

        return (
            <div>
                <div className="top-header-business">
                    <NavbarSearchContainer />
                </div>
                <div className="index-body-container">
                    <div><FilterSidebarContainer /></div>
                    <div className="business-body">
                        <h1 className="result-title">All Results</h1>
                        { businesses.length !== 0 ? 
                            businesses.map(business => (
                                <BusinessIndexItem
                                business={business}
                                key={business.id}
                                businesses={businesses}
                                reviews={reviews}
                                />
                                )) :
                            <p>We couldn't find a match. Please try another search.</p>
                        }
                    </div>
                    <BusinessMap
                        businesses={businesses}
                    />
                </div>
            </div>
        )
    }
}

export default SearchResult;

