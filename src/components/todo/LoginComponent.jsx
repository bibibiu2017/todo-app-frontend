import React, {Component} from 'react'
import AuthenticationService from "./AuthenticationService.js";

class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "bibibiu",
            password: "",
            isLoginAttempted: false,
            isLoginSuccessful: false,
            showSuccessMessage: false
        };

        this.loginFailed = this.loginFailed.bind(this);
        this.handleFormFieldChange = this.handleFormFieldChange.bind(this);
        this.handleLoginClickEvent = this.handleLoginClickEvent.bind(this);
    }

    render() {
        return (
            <div className={"login"}>
                <h1>Login</h1>
                <div className={"container"}>
                    {this.state.isLoginSuccessful &&  <div>LOGIN SUCCESSFUL</div>}
                    {this.loginFailed() && <div className={"alert alert-warning"}>INVALID CREDENTIALS !!!</div>}
                    Username: <input type={"text"} name={"username"} value={this.state.username}
                                     onChange={this.handleFormFieldChange}/>
                    Password: <input type={"password"} name={"password"} value={this.state.password}
                                     onChange={this.handleFormFieldChange}/>
                    <button className={"btn btn-success"} onClick={this.handleLoginClickEvent}>Login</button>
                </div>
            </div>
        )
    }


    loginFailed() {
        return ((this.state.isLoginAttempted) && !(this.state.isLoginSuccessful))
    };

    /**
     *
     * @param {Event} event
     */
    handleFormFieldChange(event) {
        // noinspection JSUnresolvedVariable
        this.setState({[event.target.name]: event.target.value});
    };

    handleLoginClickEvent() {
        this.setState({isLoginAttempted: true});
        if (this.state.username === 'bibibiu' && this.state.password === 'dummy') {

            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password);

            this.props.history.push("/welcome");
            this.setState({isLoginSuccessful: true});
            this.setState({showSuccessMessage: true});
        } else {
            this.setState({isLoginSuccessful: false});
            this.setState({showSuccessMessage: false});
        }
    };
}

export default LoginComponent
