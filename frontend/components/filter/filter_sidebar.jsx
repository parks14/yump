import React from "react";
import { withRouter } from "react-router-dom";

class FilterSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.handleCategory = this.handleCategory.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
    }

    handleCategory(e) {
        let find = e.target.value;
        this.props.history.push(`/search?find=${find}&near=`)
    }

    handlePrice(e) {
        let price = e.target.value;
        this.props.history.push(`/search?find=&near=&price=${price}`)
    }

    render() {
        return (
            <div className="filters-container">
                <h1>COMING SOON!</h1>
                <div className="filters-title">Filters</div>
                <div className="price-filter-container">
                    <div className="price-buttons">
                        <button value="$" >$</button>
                        <button value="$$" >$$</button>
                        <button value="$$$" >$$$</button>
                        <button value="$$$$" >$$$$</button>
                    </div>
                </div>
                <div className="category-filter-container">
                    <div>Category</div>
                    <div className="category-buttons">
                        <button value="korean" onClick={this.handleCategory}>Korean</button>
                        <button value="szechuan" onClick={this.handleCategory}>Szechuan</button>
                        <button value="japanese" onClick={this.handleCategory}>Japanese</button>
                        <button value="vietnamese" onClick={this.handleCategory}>Vietnamese</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(FilterSidebar);