import {Link} from "react-router-dom";
import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";


export class GameCodeViewPage  extends React.Component {

    componentDidMount() {
        document.body.style.backgroundColor = "var(--orange)"
    }
    goToCode (code){

        this.createNewGame()



    }

    state = {
        code: Math.floor(Math.random() * (999999 - 111111) + 111111)
    }

    createNewGame = event => {
        var db = firebase.firestore();

        db.collection("game").add({
            gamePIN: this.state.code.toString(),
            level: this.props.location.level,
            story: ""
        })
            .then((docRef) => {
                this.props.history.push({
                    pathname: '/make-a-story/game',
                    gameCode: this.state.code.toString()
                })
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });

    };



    render() {
        return (


            <div className="GameCodeView">

                <h2>Your Game PIN is:</h2>
                <h1> { this.state.code   }           </h1>
                <h3>Level: {this.props.location.level}</h3>

                    <button className="btn blue circular" onClick={ () => this.goToCode(this.state.code)}>Start</button>

            </div>



        );
    }



}


