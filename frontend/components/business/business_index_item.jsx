import React from "react";
import { withRouter } from "react-router-dom";

const BusinessIndexItem = props => {
        return (
            <div className="business-index-item">
                <div className="index-item-info">
                    <div className="index-item-name">{props.business.name}</div>
                    <div className="index-item-category">{props.business.category}</div>
                </div>
                {/* <img src={picture_url} /> */}
            </div>
        )
}

export default withRouter(BusinessIndexItem);