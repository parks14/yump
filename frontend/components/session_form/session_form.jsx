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
        // this.props.history.pop();
    }

    renderErrors() {
        return (
            <ul className="errors">
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
                <div>
                    Already on Yump? <Link className="login" to="/login" onClick={this.clearErrors}>Log in</Link>
                </div>);
        } else {
            return (
                <div>
                    New to Yump? <Link className="signup" to="/signup" onClick={this.clearErrors}>Sign Up</Link>
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
                    <div className="header">
                        <Link className="home" to="/"><img src={window.logo} className="logo" /></Link>
                    </div>
                    <div className='session-login-container'>
                        <div className="login-container">
                            <div className="login-title">Log in to Yump</div>
                        </div>
                        <div className="change-form-top">{this.changeForm()}</div>
                        <div className="terms">By logging in, you agree to Yump’s Terms of Service and Privacy Policy.</div>
                        <div className="demo-user" >
                            <button className="demo-button" onClick={this.demoLogin}>Demo User</button>
                        </div>
                        <div className="divider">OR</div>
                        {this.renderErrors()}
                        <div>
                            <form onSubmit={this.handleSubmit}>
                                <div className="login-form">
                                    <input className="login-email" type="email"
                                        value={this.state.email}
                                        onChange={this.update('email')}
                                        placeholder="Email"
                                        className="login-input"
                                        required
                                      />
                                    <input className="login-password" type="password"
                                      value={this.state.password}
                                      onChange={this.update('password')}
                                      placeholder="Password"
                                      className="login-input"
                                      required
                                    />
                                    <div>
                                        <button className="login-button" type="submit" value={this.props.formType}>Log In</button>
                                    </div>
                                    <div className="change-form-bottom">{this.changeForm()}</div>
                                </div>
                            </form>
                        </div>
                    </div>
                        
                </div>
            )
        } else if (this.props.formType === 'signup') {
            return (
                <div>
                    <div className="header">
                        <Link className="home" to="/"><img src={window.logo} className="logo" /></Link>
                    </div>
                    <div className='session-signup-container'>
                        <div className="signup-container">
                            <div className="signup-title">Sign Up for Yump</div>
                            <div className="connect">Connect with great local businesses</div>
                            <div className="terms">By continuing, you agree to Yump’s Terms of Service and acknowledge Yump’s Privacy Policy.</div>
                        </div>
                        <div className="demo-user">
                            <button className="demo-button" onClick={this.demoLogin}>Demo User</button>
                        </div>
                        <div className="divider">OR</div>
                        {this.renderErrors()}
                        <div>
                            <form onSubmit={this.handleSubmit}>
                                <div className="signup-form">
                                    <div className="name-input">
                                        <input className="first"
                                            type="text"
                                            value={this.state.first_name}
                                            onChange={this.update('first_name')}
                                            placeholder="First Name"
                                            required
                                        />
                                        <input className="last"
                                            type="text"
                                            value={this.state.last_name}
                                            onChange={this.update('last_name')}
                                            placeholder="Last Name"
                                            required
                                        />
                                    </div>
                                    <div className="other-info">
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
                                    </div>
                                    <div>
                                        <button className="signup-button" type="submit" value={this.props.formType}>Sign Up</button>
                                    </div>
                                    <div className="change-form-bottom">{this.changeForm()}</div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default SessionForm;
