import React from "react";
import { withRouter } from "react-router-dom";

class BusinessIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {
        const businessId = this.props.business.id;
        this.props.history.push(`/businesses/${businessId}`);
    }

    render() {
        const { name, category, picture_url } = this.props.business
        
        return (
            <div className="business-index-item" onClick={this.handleClick}>
                <div className="index-item-info">
                    <div className="index-item-name">{name}</div>
                    <div className="index-item-category">{category}</div>
                </div>
                <img src={picture_url} />
            </div>
        )
    }
}

export default withRouter(BusinessIndexItem);