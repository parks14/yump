import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ currentUser, logout, props }) => {
    const userDisplay = currentUser ? (
            <div className="navbar-dropdown">
                <div className="icon">
                    <i className="far fa-user fa-2x"></i>
                    <i className="fas fa-sort-down"></i>
                    <div className="modal">
                        <h2 className="user">Hello {currentUser.first_name} {currentUser.last_name.split("")[0].toUpperCase()}.</h2>
                        <i className="fas fa-user fa-1x">  About Me</i>
                        <button className="logout-button" onClick={logout}>Log Out</button>
                    </div>
                </div>
            </div>
    ) : (
        <div className="login-signup">
                <Link className="login-button" to="/login">Log In</Link>
                <Link className="signup-button" to="/signup">Sign Up</Link>
        </div>
    )


    return (
            <div className="navbar">
                <div className="business-index">
                    <Link className="businesses" to="/businesses">Businesses</Link>
                </div>
                <div className="right-navbar">
                    {userDisplay}
                    <div className="logo-container">
                        <a href="https://github.com/parks14/yump" target="blank"><img src={window.github} /></a>
                        <a href=""><img src={window.linkedin} /></a>
                    </div>
                </div>
            </div>
    )
}

export default Navbar;