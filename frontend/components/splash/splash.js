import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../search_bar/search_bar";
import NavbarContainer from "../navbar/navbar_container";
import Navbar from "../navbar/navbar";
import SuggestionContainer from "../suggestion/suggestion_container";

const Splash = () => {
    return (
        <div>
            <div className="splash-container">
                <NavbarContainer />
                <div className="splash-image-container">
                    <img src={window.splash} className="background-image"/>
                </div>
                <div className="splash-search">
                    <Link to="/"><img src={window.logo} className="splash-logo" /></Link>
                    <SearchBar />
                </div>
                <SuggestionContainer />
            </div>
        </div>
    )
};

export default Splash;