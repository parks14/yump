import React from "react";
import { withRouter } from "react-router-dom";
import BusinessShowContainer from "./business_show_container";

class BusinessIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const businessId = this.props.business.id;
        this.props.history.push(`businesses/${businessId}`);
    }

    render() {
        return (
            <div className="business-index-item" onClick={this.handleClick}>
                <div className="index-item-info">
                    <div className="img-container">
                        <img className="index-photo" src={this.props.business.photoUrls[0]} />
                    </div>
                    <div className="info-container">
                        <div className="index-item-name">{this.props.business.name}</div>
                        <div>
                            <div className="index-item-category">{this.props.business.category}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default withRouter(BusinessIndexItem);