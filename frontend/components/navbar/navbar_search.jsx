import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../search_bar/search_bar";

const NavbarSearch = ({ currentUser, logout, props }) => {
    const userDisplay = currentUser ? (
        <div className="navbar-dropdown-search">
            <div className="icon-search">
                <i className="far fa-user fa-1x"></i>
                <div className="modal-search">
                    <h2 className="user-search">Hello {currentUser.first_name} {currentUser.last_name.split("")[0].toUpperCase()}.</h2>
                    <i className="fas fa-user fa-1x">  About Me</i>
                    <button className="logout-button-search" onClick={logout}>Log Out</button>
                </div>
            </div>

        </div>
    ) : (
            <div>
                <Link className="login-button-search" to="/login">Log In</Link>
                <Link className="signup-button-search" to="/signup">Sign Up</Link>
            </div>
    )


    return (
        <div className="navbar-search">
            <div className="home-link">
                <Link to="/"><img src={window.logo} className="logo" /></Link>
            </div>
            <div className="search-nav">
                <SearchBar />
            </div>
            <div className="session-button-container">
                {userDisplay}
            </div>
        </div>
    )
}

export default NavbarSearch;