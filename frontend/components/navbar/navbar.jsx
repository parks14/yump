import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ currentUser, logout, props }) => {
    const userDisplay = currentUser ? (
            <div className="navbar-dropdown">
                <button className="navbar-dropdown-button">
                    <i className="far fa-user fa-2x"></i>
                </button>
                <div className="navbar-dropdown-content">
                    <div className="greeting-container">
                        <i className="far fa-user fa-3x"></i>
                        <h2>{currentUser.first_name} {currentUser.last_name.split("")[0].toUpperCase()}.</h2>
                    </div>
                <div className="about-me">
                    <i className="fas fa-user fa-1x"></i>  
                    <p>About Me</p> 
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
                    <div className="logo-container">
                        <a href="https://github.com/parks14/yump" target="blank"><img src={window.github} /></a>
                        <a href="https://www.linkedin.com/in/sohee-park-b8164a112/" target="blank"><img src={window.linkedin} /></a>
                    </div>
                </div>
            </div>
    )
}

export default Navbar;