import React from "react";
import {WordItem} from "./WordItem";

export class WordsList extends React.Component {

    render() {
        return (
            <div className="wordList" >
        {this.props.contacts.map(this.props.wordTowordItem)}
            </div>
            )
    }

}