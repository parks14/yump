import React from "react";
import BusinessIndexItem from "./business_index_item";
import Navbar from "../navbar/navbar";

class BusinessIndex extends React.Component {
    componentDidMount() {
        this.props.fetchBusinesses();
    }

    render() {
        const { businesses, currentUser } = this.props;
        return (
            <div>
                <div className="top-header">
                    <Navbar currentUser={currentUser}/>
                </div>
                <h1>Businesses: </h1>
                {
                    businesses.map(business => (
                        <BusinessIndexItem 
                            business={business}
                            key={business.id}
                        />
                    ))
                }
            </div>
        )
    }
};

export default BusinessIndex;