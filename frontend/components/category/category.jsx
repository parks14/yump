import React from "react";
import { withRouter } from 'react-router-dom';

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        let find = e.target.name;
        this.props.history.push(`/search?find=${find}&near=`)
    }

    render() {
        return (
            <div className="browse-category-cont">
                <h1>Browse Businesses by Category</h1>
                <div className="category-list">
                    <div className="category" name="korean" onClick={this.handleClick}>
                        <img src={window.korean} name="korean"/>
                        <p>Korean</p>
                    </div>
                    <div className="category" name="szechuan" onClick={this.handleClick}>
                        <img src={window.szechuan} name="szechuan" />
                        <p>Szechuan</p>
                    </div>
                    <div className="category" name="japanese" onClick={this.handleClick}>
                        <img src={window.japanese} name="japanese" />
                        <p>Japanese</p>
                    </div>
                    <div className="category" name="vietnamese" onClick={this.handleClick}>
                        <img src={window.vietnamese} name="vietnamese" />
                        <p>Vietnamese</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Category);