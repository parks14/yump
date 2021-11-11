import React from "react";
import NavBarSearchContainer from './navbar/navbar_search_container';

const PageNotFound = () => {
    return (
        <div>
            <NavBarSearchContainer />
            <div>
                The page you are looking for cannot be found.
            </div>
        </div>
    )
}

export default PageNotFound;