import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ currentUser, logout }) => {
    const userGreeting = () => (
        <div className="navbar-items">
            <div className="navbar-dropdown">
                <h2 className="user">{currentUser.first_name}</h2>
                <button className="navbar-content" onClick={logout}>Log Out</button>
            </div>
        </div>
    );

    const sessionLinks = () => (
        <div className="login-signup">
            <div>
                <Link to="/login">Login</Link>
            </div>
            <div>
                <Link to="/signup">Sign up</Link>
            </div>
        </div>
    )

    return currentUser ? userGreeting() : sessionLinks();
}

export default Navbar;