import React from "react";
import '../App.css'
import {Link} from "react-router-dom";



export class Home extends React.Component {

    componentDidMount() {
        document.body.style.backgroundColor = "var(--orange)"
    }

    state = {
      code: ""
    };

    startGameWithCode (code){

        if (this.state.code.length === 6) {
            this.props.history.push({
                pathname: '/make-a-story/game',
                gameCode: code
            })
        } else {
            this.setState({
                code: "Game PIN must to have 6 siffror"
            })
        }



    }

    render() {
        return (


                <div className="home">
           <h1>WHAT HAPPENS NEXT?</h1>
                    <p>Generat code and share then with  your friends to build a funny story together!
                        You have to add a new sentence with two given words and complete What Happens Next?

                        <br/>
                        <br/>
                        You can choose of 3 levels of vocabulary - beginner, medium and advanced.
                        <br/>
                        <br/>
                        To make it difficult you can just see the last sentence someone made and when the story is complete, you can read the whole.
                        <br/>
                        <br/>
                        Improve your English and have fun!
                        </p>

                    <Link to="/make-a-story/create-new-game">
                    <button className="btn blue circular"  >Create new game</button>
                    </Link>
                    <h3>Or do you already have code?</h3>
                    <div className="gamePin">

                    <input placeholder="Game PIN" value={this.state.code}  onChange={(e) => {this.handleInput(e)}}/>

                    <button className="btn red  small" onClick={ () => this.startGameWithCode(this.state.code)}>Enter</button>
                    </div>

                </div>



        );
    }


    handleInput(e) {
        if (this.state.code === "Game PIN must to have 6 siffror") {
            this.setState({
                code: ""
            })
        }else {

            this.setState({
                code: e.target.value
            })
        }



    }
}



