import React from "react";

class FilterSidebar extends React.Component {
    render() {
        return (
            <div className="filters-container">
                <div className="filters-title">Filters</div>
                <div className="price-filter-container">
                    <div className="price-buttons">
                        <button>$</button>
                        <button>$$</button>
                        <button>$$$</button>
                        <button>$$$$</button>
                    </div>
                </div>
                <div className="category-filter-container">
                    <div>Category</div>
                    <div className="category-buttons">
                        <button>Korean</button>
                        <button>Szechuan</button>
                        <button>Japanese</button>
                        <button>Vietnamese</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default FilterSidebar;