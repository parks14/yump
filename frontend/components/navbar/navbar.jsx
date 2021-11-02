import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ currentUser, logout }) => {
    const userDisplay = currentUser ? (
            <div className="navbar-dropdown">
                <h2 className="user">Hello {currentUser.first_name}</h2>
                <button className="navbar-content" onClick={logout}>Log Out</button>
            </div>
    ) : (
        <div className="login-signup">
            <div>
                <Link className="login-button" to="/login">Log In</Link>
                <Link className="signup-button" to="/signup">Sign Up</Link>
            </div>
        </div>
    )

    return (
        <div className="navbar">
            <div className="right-navbar">
                {userDisplay}
            </div>
        </div>
    )
}

export default Navbar;