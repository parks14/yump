import React from "react";
import { withRouter } from "react-router-dom";
import SuggestionContainer from "./suggestion_container";

class Suggestion extends React.Component {
    randomBusiness() {
        const { businesses } = this.props
    }

    render() {
        return (
            <div>
                Suggestions
            </div>
        )
    }
}

export default Suggestion;