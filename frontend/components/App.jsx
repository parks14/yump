import React from "react";
import NavbarContainer from "./navbar/navbar_container";
import { Link } from "react-router-dom";

const App = () => (
    <div>
        <header>
            <h1>Yumps</h1>
            <NavbarContainer /> 
        </header>
    </div>
);

export default App;