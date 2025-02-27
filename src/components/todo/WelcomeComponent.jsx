import React, {Component} from 'react'
import {Link} from "react-router-dom";

class WelcomeComponent extends Component {

    render() {
        return (
            <>
                <h1>Welcome</h1>
                <div className={"container"}>
                    Manage your todos <Link to={"/todos"}>here</Link>
                </div>
            </>
        );
    }
}

export default WelcomeComponent
