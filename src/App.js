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

import firebase from "firebase/app";
import "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwnpHYoYR1rqd79iASD08rTkS1gd6ZPkw",
    authDomain: "make-a-story.firebaseapp.com",
    projectId: "make-a-story",
    storageBucket: "make-a-story.appspot.com",
    messagingSenderId: "737035725955",
    appId: "1:737035725955:web:4746258ce6d0a32312ffb6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export default firebase;



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



