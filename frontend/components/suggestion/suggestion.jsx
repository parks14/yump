import React from "react";
import { Link } from "react-router-dom";
import SuggestionContainer from "./suggestion_container";
import SuggestionItem from "./suggestion_item";

class Suggestion extends React.Component {
    constructor(props) {
        super(props);
        this.randomBusiness = this.randomBusiness.bind(this);
    }

    componentDidMount() {
        this.props.fetchBusinesses();
        this.props.fetchReviews();
    }

    randomBusiness() {
        const { businesses } = this.props;
        const result = [];
        for (let i = 0; i < 3; i++) {
            const random = Math.floor(Math.random() * businesses.length);
            if (result.indexOf(businesses[random]) !== -1) {
                continue;
            }
            result.push(businesses[random]);
        };
        return result
    }

    render() {
        const { businesses, reviews } = this.props;
        let randomArr;
        if (businesses.length < 1) {
            return null;
        } else {
            randomArr = this.randomBusiness();
        }

        return (
            <div className="suggestions-container">
                <h1>Yump New York</h1>
                <h2 className="suggestion-sub">Hot & New Businesses</h2>
                <div className="suggestion-list">
                    {
                        randomArr.map(business => (
                            <SuggestionItem
                                business={business}
                                key={business.id}
                                reviews={reviews}
                            />
                        ))
                    }
                </div>
                <Link className="more-businesses" to="/businesses">See more hot and new businesses</Link>
            </div>
        )
    }
}

export default Suggestion;