import React from "react";
import { Link } from "react-router-dom";
import NavbarSearchContainer from "../navbar/navbar_search_container";

class CreateReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: this.props.review.body,
            rating: this.props.review.rating,
            author_id: this.props.currentUserId,
            business_id: this.props.businessId
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.businessId);
        this.props.clearReviewErrors();
    };

    handleSubmit(e) {
        e.preventDefault();
        const review = Object.assign({}, this.state);
        this.props.processForm(review)
            .then(() => this.props.history.push(`/businesses/${this.state.business_id}`))
    }

    handleChange(type) {
        return(e) => (
            this.setState({ [type]: e.currentTarget.value })
        )
    }

    renderErrors() {
        // if (!this.props.errors) {
        //     return null 
        // } else {
            return (
                <ul className="review-errors">
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            );
        // }
    };

    render() {
        const { business } = this.props;

        if (!business) {
            return null
        }   else {
        return (
            <div>
                <div className="top-header-review">
                    <NavbarSearchContainer />
                </div>
                <div className="create-review-container">
                    <div className="review-header-container">
                        <Link to={`/businesses/${business.id}`} className="review-title">{business.name}</Link>
                        <a href="">Read our review guidelines</a>
                    </div>
                    <div className="review-form-container">
                        <form onSubmit={this.handleSubmit}>
                            <div className="review-body-container">
                                <div className="rating-container">
                                    <fieldset className="rating-selector">
                                        <span className="star-group">
                                            <input type="radio" value="5" id="radio5" name="rating" onChange={this.handleChange("rating")} />
                                            <label htmlFor="radio5"><i className="fas fa-star"></i></label>

                                            <input type="radio" value="4" id="radio4" name="rating" onChange={this.handleChange("rating")} />
                                            <label htmlFor="radio4"><i className="fas fa-star"></i></label>
                                            
                                            <input type="radio" value="3" id="radio3" name="rating" onChange={this.handleChange("rating")} />
                                            <label htmlFor="radio3"><i className="fas fa-star"></i></label>
                                            
                                            <input type="radio" value="2" id="radio2" name="rating" onChange={this.handleChange("rating")} />
                                            <label htmlFor="radio2"><i className="fas fa-star"></i></label>
                                            
                                            <input type="radio" value="1" id="radio1" name="rating" onChange={this.handleChange("rating")} />
                                            <label htmlFor="radio1"><i className="fas fa-star fa-1x"></i></label>
                                        </span>
                                    </fieldset>
                                </div>
                                <textarea className="review-body" onChange={this.handleChange("body")} value={this.state.body} 
                                    placeholder="Doesn’t look like much when you walk past, but I was practically dying of hunger so I popped in. 
                                    The definition of a hole-in-the-wall. I got the regular hamburger and wow…  there are no words. A classic burger done right. 
                                    Crisp bun, juicy patty, stuffed with all the essentials (ketchup, shredded lettuce, tomato, and pickles). 
                                    There’s about a million options available between the menu board and wall full of specials, so it can get a little overwhelming, but you really can’t go wrong. 
                                    Not much else to say besides go see for yourself! You won’t be disappointed.">
                                </textarea>
                                <div>{this.renderErrors()}</div>
                            </div>
                            <div>
                                <button className="post-review-button" type="submit" value={this.props.formType}>Post Review</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )}
    }
}

export default CreateReviewForm;