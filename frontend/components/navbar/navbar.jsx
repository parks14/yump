import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ currentUser, logout, props }) => {
    const userDisplay = currentUser ? (
            <div className="navbar-dropdown">
                <button className="navbar-dropdown-button"><i className="fas fa-user-circle fa-2x"></i></button>
                <div className="navbar-dropdown-content">
                    <div className="greeting-container">
                        <i className="fas fa-user-circle fa-2x"></i>
                        <h2>{currentUser.first_name} {currentUser.last_name.split("")[0].toUpperCase()}.</h2>
                    </div>
                <div className="about-me">
                    <i className="fas fa-user fa-1x"></i>
                    <a href="https://soheepark.net/" target="blank">About Me</a>  
                    {/* <p>About Me</p>  */}
                </div>
                    <button className="logout-button" onClick={logout}>Log Out</button>
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
                </div>
            </div>
    )
}

export default Navbar;