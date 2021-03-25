import React from "react";
import {WordItem} from "./WordItem";

export class WordsList extends React.Component {

    wordTowordItem = word => {
     /*   const title = word.word;
        const example= word.definitions[0].example;
        const type = word.definitions[0].type;
        return <WordItem key={title} title={title} type={type} example={example} description={description} />;
        */

        const title = word.word;
        const description = word.definition;
        const pronunciation = word.pronunciation;
        return <WordItem key={title} title={title} description={description} pronunciation={pronunciation} />;

    }


    render() {

        return (

            <div>
        {this.props.contacts.map(this.wordTowordItem)}

            </div>
            )

    }


}