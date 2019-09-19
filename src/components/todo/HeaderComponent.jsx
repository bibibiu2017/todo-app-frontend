import React, {Component} from 'react'
import {Link} from "react-router-dom";
import AuthenticationService from "./AuthenticationService.js";

class HeaderComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };

        this.logOut = this.logOut.bind(this);
    }

    logOut() {
        AuthenticationService.logout();
        this.setState({isLoggedIn: AuthenticationService.isUserLoggedIn()})
    }



    render() {
        this.state.isLoggedIn = AuthenticationService.isUserLoggedIn()
        console.log(this.state.isLoggedIn);
        return (
            <header>
                <nav className={"navbar navbar-expand-md navbar-dark bg-dark"}>
                    <div>
                        <a className={"navbar-brand"}
                           href={"https://docs.dynamodigital-ke.com/vendor/swagger-ui.html"}>Dynamo</a>
                    </div>
                    <ul className={"navbar-nav"}>
                        {
                            this.state.isLoggedIn &&
                            <li>
                                <Link className={"nav-link"} to={"/"}>Home</Link>
                            </li>
                        }
                        {
                            this.state.isLoggedIn &&
                            <li>
                                <Link className={"nav-link"} to={"/todos"}>Todos</Link>
                            </li>
                        }
                    </ul>
                    <ul className={"navbar-nav navbar-collapse justify-content-end"}>
                        {
                            !this.state.isLoggedIn &&
                            <li>
                                <Link className={"nav-link"} to={"/login"}>Login</Link>
                            </li>
                        }
                        {
                            this.state.isLoggedIn &&
                            <li>
                                <Link className={"nav-link"} to={"/logout"}
                                      onClick={this.logOut}>Logout</Link>
                            </li>
                        }
                    </ul>
                </nav>
            </header>
        );
    }
}

export default HeaderComponent
