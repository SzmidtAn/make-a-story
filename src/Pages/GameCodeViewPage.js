import {Link} from "react-router-dom";
import React from "react";


export class GameCodeViewPage  extends React.Component {

    componentDidMount() {
        document.body.style.backgroundColor = "var(--orange)"
    }
    goToCode (code){

        this.props.history.push({
            pathname: '/make-a-story/game',
            gameCode: code
        })

    }

    state = {
        code: Math.floor(Math.random() * (999999 - 111111) + 111111)
    }



    render() {
        return (


            <div className="GameCodeView">
                game code vie page

                <h2>Your code is:</h2>
                <h1>
                    { this.state.code   }           </h1>
                <h3>Level: {this.props.location.level}</h3>

                    <button className="btn blue circular" onClick={ () => this.goToCode(this.state.code)}>Start</button>

            </div>



        );
    }



}


