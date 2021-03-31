import {WordsList} from "../WordsList";
import React from "react";
import {WordItem, WordItemDescription} from "../WordItem";
import {TextView} from "../TextView";


export class GamePage extends React.Component {
    state = {
        contacts: [],
        getWord: "",
        getDetailsToThisWord: false,
    };

    componentDidMount() {
        this.handleInputChange()
        document.body.style.backgroundColor = "var(--red)"

    }



    getJsonFromApi() {
        fetch("https://random-words-api.vercel.app/word")
            .then(res => res.json())
            .then(json =>
            {this.setState({
                    contacts: this.state.contacts.concat(json)
                })}
    );
    }

    handleInputChange = (e) => {
        this.setState({
            contacts: [],
            getDetailsToThisWord: false,
        })
        for (let i = 0; i < 2; i++) {
        this.getJsonFromApi(true)
        }
    }

    showItemsDescription = (e) => {
        const index = this.getIndex(e.target.textContent)
        const getWord = this.state.contacts[index]
            this.setState({
                getWord: getWord,
                getDetailsToThisWord: true,
            })
    }

    getIndex = (title) => {
        return this.state.contacts.findIndex(obj => obj.word === title);
    }

    wordTowordItem  = (word, component) => {
        const title = word.word;
        const description = word.definition;
        const pronunciation = word.pronunciation;

        switch (component){
            case "WordItemDescription" :
                return <WordItemDescription title= {title} description={description} pronunciation={pronunciation}  />;
            default:
                return <WordItem key={title} title={title} showItemsDescription={this.showItemsDescription}/>;

        }
    }


    render() {
        return (
            <div className="gamePage">

                <div className="gamePageContainer">
                    <h1 className="gameCode">{this.props.location.gameCode ? this.props.location.gameCode :"786954"}</h1>
                    <p>This is the last<br/> sentence someone wrote<br/> in your story &darr;</p>
                    <h1 className="lastSentence">So we just had to show this shoes to this duck...</h1>

                    <div >
                        {this.state.contacts.length === 2 ?   <WordsList contacts={this.state.contacts} wordTowordItem={this.wordTowordItem}  showItemsDescription={this.showItemsDescription} />
                        : "Loading..." }

                    </div>
                </div>

                    <div>
                        {this.state.getDetailsToThisWord ?
                            <div>
                                {this.wordTowordItem(this.state.getWord, "WordItemDescription")}
                            </div>  : ""}
                    </div>
                    <div>
                        <TextView />
                    </div>

                <button className="btn blue circular" type="button">Done</button>

            </div>
        );
    }



}


