import React from "react";
import '../App.css'
import {Link} from "react-router-dom";
import firebase from "firebase";



export class Home extends React.Component {

    componentDidMount() {
        document.body.style.background = "var(--orangeGradient)"
    }

    state = {
      code: ""
    };

    getDataFromDB =  (codePIN)=> {
        const unsub = firebase
            .firestore()
            .collection("game")
            .where('gamePIN', '==', codePIN)
            .get()
            .then(game => {
                game.forEach((doc) => {
              this.navigateToGamePage(codePIN)
                });
            })
            .then(
                this.setState({
                    code: "Incorrect Game PIN"
                })
            );
    }

    startGameWithCode (code){

        if (this.state.code.length === 6) {
        this.getDataFromDB(code)
        } else {
            this.setState({
                code: "Game PIN must contains 6 digits"
            })
        }
    }

    navigateToGamePage = (codePIN) => {
        this.props.history.push({
            pathname: '/make-a-story/game',
            gameCode: codePIN
        })
    }


    handleInput(e) {
        if (this.state.code === "Game PIN must contains 6 digits" || this.state.code === "Incorrect Game PIN")  {
            this.setState({
                code: ""
            })
        } else {

            this.setState({
                code: e.target.value
            })
        }
    }

    render() {
        return (


                <div className="home">
           <h1>WHAT HAPPENS NEXT?</h1>

                    <p>
                        Generate the code and share it with your friends to create a fun story together! You need to add a new sentence with two given words and complete What Happens Next?
                        <br/>
                        <br/>
                        You can choose from 3 vocabulary levels - Beginner, Intermediate and Advanced.
                        <br/>
                        <br/>
                        To make it harder you can only see the last sentence someone wrote, and when the story is complete you can read the whole thing.
                        <br/>
                        <br/>
                        Improve your English and have fun!
                    </p>


                    <Link to="/make-a-story/create-new-game">
                    <button className="btn blue circular"  >Create new game</button>
                    </Link>
                    <h3>Or do you already have code?</h3>
                    <div className="gamePin">

                    <input placeholder="Game PIN" value={this.state.code}  onClick={(e) => {this.handleInput(e)}} onChange={(e) => {this.handleInput(e)}}/>

                    <button className="btn red small" onClick={ () => this.startGameWithCode(this.state.code)}>Enter</button>
                    </div>

                </div>



        );
    }


}



