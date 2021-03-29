import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from 'react-router-dom';
import {GamePage} from "./Pages/GamePage";
import {Home} from "./Pages/Home";



export class App extends React.Component {


    render() {
        return (
            <Router>
                <div className="appContainer">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/game">Game</Link>
                        </li>
                    </ul>

                    <Route exact path="/" component={Home} />
                    <Route path="/game" component={GamePage} />
                </div>


            </Router>

        );
    }



}



