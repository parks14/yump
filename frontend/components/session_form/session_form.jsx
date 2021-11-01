import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            zip_code: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
        this.clearErrors = this.clearErrors.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    changeForm() {
        if (this.props.formType === "signup") {
            return (
                <div className="change-form">
                    Already on Yump? <Link to="/login" onClick={this.clearErrors}>Log in</Link>
                </div>);
        } else {
            return (
                <div className="change-form">
                    New to Yump? <Link to="/signup" onClick={this.clearErrors}>Sign Up</Link>
                </div>
            );
        }
    }

    demoLogin(e) {
        e.preventDefault();
        let demoUser = {
            email: 'demouser@mail.com',
            password: 'demouser'
        }

        this.props.demoLogin(demoUser);
    }

    clearErrors(e) {
        this.props.clearErrors()
    }

    render() {
        if (this.props.formType === 'login') {
            return (
                <div>
                    <div className='session-container'>
                        <div className="login-container">
                            <div className="login">Log in to Yump</div>
                        </div>
                        <button className="demo-user" onClick={this.demoLogin}>Demo User</button>
                        {this.renderErrors()}
                        <form onSubmit={this.handleSubmit}>
                            <div className="login-form">
                                <input type="email"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    placeholder="Email"
                                    className="login-input"
                                    required
                                  />
                                <br/>
                                <input type="password"
                                  value={this.state.password}
                                  onChange={this.update('password')}
                                  placeholder="Password"
                                  className="login-input"
                                  required
                                />
                                <button className="login-button" type="submit" value={this.props.formType}>Log In</button>
                                {this.changeForm()}
                            </div>
                        </form>
                    </div>
                </div>
            )
        } else if (this.props.formType === 'signup') {
            return (
                <div>
                    <div className='session-container'>
                        <div className="signup-container">
                            <div className="signup">Sign Up for Yump</div>
                        </div>
                        <button className="demo-user" onClick={this.demoLogin}>Demo User</button>
                        {this.renderErrors()}
                        <form onSubmit={this.handleSubmit}>
                            <div className="signup-form">
                                <div>
                                    <input
                                        type="text"
                                        value={this.state.first_name}
                                        onChange={this.update('first_name')}
                                        placeholder="First Name"
                                        required
                                    />
                                    <input
                                        type="text"
                                        value={this.state.last_name}
                                        onChange={this.update('last_name')}
                                        placeholder="Last Name"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        value={this.state.email}
                                        onChange={this.update('email')}
                                        placeholder="Email"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                        placeholder="Password"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        value={this.state.zip_code}
                                        onChange={this.update('zip_code')}
                                        placeholder="ZIP Code"
                                        required
                                    />
                                </div>
                                <button className="signup-button" type="submit" value={this.props.formType}>Sign Up</button>
                                {this.changeForm()}
                            </div>
                        </form>
                    </div>
                </div>
            )
        }
    }
}

export default SessionForm;
