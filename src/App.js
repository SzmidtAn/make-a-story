import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from 'react-router-dom';
import {GamePage} from "./Pages/GamePage";
import {Home} from "./Pages/Home";
import {CreateNewGamePage} from "./Pages/CreateNewGamePage";
import {GameCodeViewPage} from "./Pages/GameCodeViewPage";


export class App extends React.Component {


    render() {
        return (
            <Router>
                <div className="appContainer">
                    <ul>
                        <li>
                            <Link to="/make-a-story/">Home</Link>
                        </li>
                        <li>
                            <Link to="/make-a-story/game">Game</Link>
                        </li>
                        <li>
                            <Link to="/make-a-story/create-new-game">Create new game</Link>
                        </li>
                    </ul>

                    <Route exact path="/make-a-story/" component={Home} />
                    <Route path="/make-a-story/game" component={GamePage} />
                    <Route path="/make-a-story/create-new-game" component={CreateNewGamePage} />
                    <Route path="/make-a-story/GameCodeViewPage" component={GameCodeViewPage}  />
                </div>


            </Router>

        );
    }



}



