import React from "react";
import { withRouter } from "react-router-dom";
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
        console.log(businesses)
        const result = [];
        for (let i = 0; i < 3; i++) {
            const random = Math.floor(Math.random() * businesses.length);
            if (result.indexOf(businesses[random]) !== -1) {
                continue;
            }
            result.push(businesses[random]);
        };
        console.log(result)
        return result
    }

    render() {
        const { businesses, reviews } = this.props;
        let randomArr;
        if (businesses.length < 1) {
            return null;
        } else {
            randomArr = this.randomBusiness();
            console.log(randomArr)
        }

        return (
            <div className="suggestioins-container">
                <div>
                    Yump New York
                </div>
                <div className="suggestion-list">
                    <h1>Hot Businesses</h1>
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
            </div>
        )
    }
}

export default Suggestion;