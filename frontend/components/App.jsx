import React from "react";
import { Route } from "react-router";
import NavbarContainer from "./navbar/navbar_container";
import LogInFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import { Link } from "react-router-dom";

const App = () => (
    <div>
        <header>
            <Link to="/" className="header-link">
                <h1>Yump</h1>
            </Link>
            <NavbarContainer /> 
        </header>

        <Route exact path="/login" component={LogInFormContainer} />
        <Route excat path="/signup" component={SignUpFormContainer} />
    </div>
);

export default App;