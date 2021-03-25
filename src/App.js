import './App.css';
import {WordsList} from "./WordsList";
import React from "react";


export class App extends React.Component {
    state = {
        contacts: [],
        getWord: "",
    };

    componentDidMoun = (word) => {
        var Owlbot = require('owlbot-js');

        var list =  []
        var client = Owlbot("7c42959444c069238e6df6600d57f3e1c71bb521");

        if (word){

            client
            .define(this.state.getWord)
            .then(function (result){
                list = result
            })
            .then(json =>
            {
            console.log(list)
                this.setState({ contacts: [ list ] })

            });

        ;

        }

    }


    handleInputChange = (e) => {

        this.componentDidMoun(true)
    }

    handleChange = (e) => {

        this.setState({
            getWord: e.target.value
        });
    }

    render() {
        return (
            <div>
                <main className="container">

                    <section>

                        <label>
                            Find:
                            <input type="text" name="name" value={this.state.getWord}
                                   onChange={this.handleChange} />
                        </label>
                        <button type="button"  onClick={this.handleInputChange} >Submit</button>

                    </section>



                    {(this.state.contacts.length > 0)  ? <WordsList contacts={this.state.contacts}  /> : ''}

                </main>
            </div>
        );
    }



}



