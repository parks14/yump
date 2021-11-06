import React from "react";
import { withRouter } from "react-router-dom";

const SearchBar = () => {
        return (
            <div className="search-bar-container">
                <div className="search-bar">
                    <input type="text" placeholder="korean"/>
                </div>    
                <div className="search-button-container">
                    <i className="fas fa-search fa-1x"></i>
                </div>
            </div>
        )
}

export default withRouter(SearchBar)