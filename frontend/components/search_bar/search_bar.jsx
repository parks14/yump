import React from "react";
import { withRouter } from "react-router-dom";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            find: '',
            near: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(field) {
        return (e) => this.setState({
            [field]: e.currentTarget.value
        }) 
    }

    handleSubmit(e) {
        e.preventDefault();
        let find = this.state.find;
        let near = this.state.near;
        this.props.history.push(`/businesses?find=${find}&near=${near}`)
    }

    render() {
        return (
            <form className="search-bar" onSubmit={this.handleSubmit}>
                <span className="input-label">Find</span>
                <input type="text" placeholder="korean, szechuan, japanese..." value={this.state.find} onChange={this.handleChange("find")}/>
                <span className="input-label">Near</span>
                <input type="text" placeholder="New York" value={this.state.near} onChange={this.handleChange("near")}/>
                <button type="submit"><i className="fas fa-search"></i></button>
            </form>
        )
    }
}

export default withRouter(SearchBar)