import React from "react";
import { withRouter } from "react-router-dom";

const BusinessIndexItem = props => {
        return (
            <div className="business-index-item">
                <div className="index-item-info">
                    <div className="img-container">
                        <img className="index-item-photo" src={props.business.photoUrls[0]} />
                    </div>
                    <div className="index-item-name">{props.business.name}</div>
                    <div className="index-item-category">{props.business.category}</div>
                </div>
            </div>
        )
}

export default withRouter(BusinessIndexItem);