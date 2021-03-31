import {Link, Redirect} from "react-router-dom";
import { useHistory } from "react-router-dom";

import React from "react";


export class CreateNewGamePage extends React.Component {



    componentDidMount() {
        document.body.style.backgroundColor = "var(--orange)"
    }



    goToCode (level){

        this.props.history.push({
            pathname: '/make-a-story/GameCodeViewPage',
         level: level
        })

    }


    render() {
        return (


            <div className="createNewGamePage" >
                <h1>Select your level</h1>

                <div className="cardcircle">

                    <div className="circle orangeDarkGradient"> </div>
                    <div className="card orangeDark">
                        <p>You want to learn English
                            <br/>
                            and your current level
                            <br/>
                            is BASIC</p>
                        <button onClick={ () => this.goToCode("Beginner")}>Beginner</button>

                    </div>
                </div>

                <div>

                    <div className="circle redGradient"> </div>
                <div className="card red">
                    <p>You can speak English
                        <br/>
                        and want to practice
                        <br/>
                        with other people</p>


                    <button onClick={ () => this.goToCode("Intermediate")}>Intermediate</button>
                </div>
                </div>

                <div>

                    <div className="circle blueGradient"> </div>
                    <div className="card blue">
                        <p>You are PRO
                            <br/>
                            and you want to learn
                            <br/>
                            new, difficult words</p>
                        <button onClick={ () => this.goToCode("Advanced")}>Advanced</button>
                    </div>
                </div>
            </div>



        );
    }



}


