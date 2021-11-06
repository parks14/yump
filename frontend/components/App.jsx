import React from "react";
import { Route, Switch } from "react-router";
import NavbarContainer from "./navbar/navbar_container";
import LogInFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import BusinessIndexContainer from "./business/business_index_container";
import BusinessShowContainer from "./business/business_show_container";
import { Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Splash from "./splash/splash";

const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Splash}/>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute excat path="/signup" component={SignUpFormContainer} />
            <Route exact path="/businesses" component={BusinessIndexContainer} />
            <Route exact path="/businesses/:businessId" component={BusinessShowContainer} />
        </Switch>
    </div>
);

export default App;