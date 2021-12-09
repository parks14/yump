import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../search_bar/search_bar";
import NavbarContainer from "../navbar/navbar_container";
import Navbar from "../navbar/navbar";
import SuggestionContainer from "../suggestion/suggestion_container";
import Category from "../category/category";
import Footer from "../footer/footer";

const Splash = () => {
    return (
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
            <Category />
            <Footer />
        </div>
    )
};

export default Splash;