import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../search_bar/search_bar";
import NavbarContainer from "../navbar/navbar_container";
import Navbar from "../navbar/navbar";

const Splash = () => {
    return (
        <div>
            <div className="splash-container">
                <NavbarContainer />
                <div className="splash-image-container">
                    <img className="background-image" src={window.splash}/>
                </div>
                <div className="splash-search">
                    <Link to="/"><img className="splash-logo" src={window.logo} /></Link>
                    
                    <SearchBar />
                </div>
            </div>
        </div>
    )
};

export default Splash;