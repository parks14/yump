import React from "react";
import { Redirect, Route, Switch } from "react-router";
import NavbarContainer from "./navbar/navbar_container";
import LogInFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import BusinessIndexContainer from "./business/business_index_container";
import BusinessShowContainer from "./business/business_show_container";
import CreateReviewFormContainer from "./review/create_review_form_container";
import EditReviewFormContainer from "./review/edit_review_form_container";
import PageNotFound from "./page_not_found";
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
            <ProtectedRoute exact path="/businesses/:businessId/reviews/new" component={CreateReviewFormContainer} />
            <ProtectedRoute exact path="/businesses/:businessId/reviews/:reviewId/edit" component={EditReviewFormContainer} />
            <Route path="/404" component={PageNotFound} />
            <Redirect to="/404" />
        </Switch>
    </div>
);

export default App;