import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../search_bar/search_bar";

const NavbarSearch = ({ currentUser, logout, props }) => {
    const userDisplay = currentUser ? (
        <div className="navbar-dropdown-search">
            <div className="icon-search">
                <i className="fas fa-user-circle fa-2x"></i>
                <div className="modal-search">
                    <h2 className="user-search">Hello {currentUser.first_name} {currentUser.last_name.split("")[0].toUpperCase()}.</h2>
                    <a href="https://soheepark.net/" target="blank"><i className="fas fa-user fa-1x">About Me</i></a>
                    <button className="logout-button-search" onClick={logout}>Log Out</button>
                </div>
            </div>

        </div>
    ) : (
            <div className="session-button-container">
                <Link className="login-button-search" to="/login">Log In</Link>
                <Link className="signup-button-search" to="/signup">Sign Up</Link>
            </div>
    )


    return (
        <div className="navbar-search">
            <div className="home-link">
                <Link to="/"><img src={window.logo} className="logo" /></Link>
            </div>
            <Link className="businesses" to="/businesses">Businesses</Link>
            <SearchBar />
            <div className="buttons-container">
                {userDisplay}
            </div>
        </div>
    )
}

export default NavbarSearch;