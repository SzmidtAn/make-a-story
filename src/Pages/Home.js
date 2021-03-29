import React from "react";
import '../App.css'



export class Home extends React.Component {

    componentDidMount() {
        document.body.style.backgroundColor = "white"
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


                    <button className="btn blue circular">Get started</button>
                    <h3>Or do you already have code?</h3>
                    <h2>Please enter the code</h2>
                    <input placeholder="1234 2345" />
                    <button className="  circular small">Submit</button>

                </div>



        );
    }



}



