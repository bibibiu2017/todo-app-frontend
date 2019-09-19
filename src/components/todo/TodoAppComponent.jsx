import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";
import TodoListComponent from "./TodoListComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import LogoutComponent from "./LogoutComponent";
import AuthenticatedRoute from "./AuthenticatedRoute";
import ErrorComponent from "./ErrorComponent";

class TodoAppComponent extends Component {

    render() {
        return (
            <div className={"TodoApp"}>
                <Router>
                    <>
                        <HeaderComponent/>
                        <Switch>
                            <Route exact path={"/login"} component={LoginComponent}/>
                            <AuthenticatedRoute exact path={"/"} component={LoginComponent}/>
                            <AuthenticatedRoute exact path={"/logout"} component={LogoutComponent}/>
                            <AuthenticatedRoute path={"/welcome"} component={WelcomeComponent}/>
                            <AuthenticatedRoute path={"/todos"} component={TodoListComponent}/>
                            <Route component={ErrorComponent}/>
                        </Switch>
                        <FooterComponent/>
                    </>
                </Router>
            </div>
        )
    }
}

export default TodoAppComponent;
