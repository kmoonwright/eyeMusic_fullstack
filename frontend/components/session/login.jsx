import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({[type]: e.target.value})
        }
    }

    componentWillUnmount() {
        this.props.receiveErrors([]);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
    }

    render() {
        let errorsList = null;
        let stateErrors = this.props.errors;
        if (stateErrors) {
            errorsList = (
                <ul className="session-errors">
                    {stateErrors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
            )
        } else {
            errorsList = null;
        };

        return (
            <div className="session-form-container" id="session-login-container">
                <div className="session-form-logo">
                    <h3>eyeMUSIC</h3>
                </div>
                <div className="session-form">
                    <div className="session-form-header">
                        <div className="session-form-icon"></div>
                    </div>

                    <div className="session-form-input">
                        <p>Let's get back at it.</p>
                        {errorsList}
                        <form>
                            <label>
                                <input 
                                    type="text"
                                    value={this.state.username}
                                    onChange={this.handleInput("username")}
                                    placeholder="Username"
                                    // onChange={e => this.setState({ [username]: e.target.value })}
                                />
                            </label>
                            <label>
                                <input 
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.handleInput("password")}
                                    placeholder="Password"
                                    // onChange={e => this.setState({ [password]: e.target.value })}
                                />
                            </label>
                            <div className="session-form-btn" id="login-btn">
                                <button onClick={this.handleSubmit}>Login</button>
                            </div>
                        </form>
                    </div>
                    <div className="session-form-link">
                        <p>Not a member? <Link to="/signup">Sign up</Link> today!</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;