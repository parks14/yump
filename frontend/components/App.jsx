import React from "react";
import { Route, Switch } from "react-router";
import NavbarContainer from "./navbar/navbar_container";
import LogInFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import { Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
    <div>
        <header>
            <NavbarContainer /> 
            <h1>Yump</h1>
        </header>

        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute excat path="/signup" component={SignUpFormContainer} />
        </Switch>
    </div>
);

export default App;