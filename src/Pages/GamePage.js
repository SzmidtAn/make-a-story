import {WordsList} from "../WordsList";
import React from "react";
import {WordItem, WordItemDescription} from "../WordItem";
import firebase from "firebase/app";
import "firebase/firestore";


export class GamePage extends React.Component {
    state = {
        contacts: [],
        getWord: "",
        getDetailsToThisWord: false,
        gameCode: "",
        lastSentence: "",
        newSentence: "",
        story: "",
        gameID: ""
    };

    componentDidMount() {
        this.getNewWords()
        this.getGameFromDB(this.props.location.gameCode)
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

    getNewWords = (e) => {
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

    getGameFromDB =  (codePIN)=> {
    const unsub = firebase
        .firestore()
        .collection("game")
        .where('gamePIN', '==', codePIN)
        .get()
        .then(game => {
            game.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);

                this.setState({
                  gameCode: codePIN,
                  lastSentence: doc.get("lastSentence"),
                  story: doc.get("story"),
                  gameID: doc.id
              })
            });
        })


}

    handleInput = (e) => {
        this.setState({
            newSentence: e.target.value
        })
    }

    submitNewSentence = () => {

        firebase
            .firestore()
            .collection("game")
            .doc(this.state.gameID)
            .update({
           "lastSentence" : this.state.newSentence,
                "story" :  this.state.story + " " + this.state.newSentence
        })
            .then(() => {
                console.log("Document successfully updated!");
            });

        this.navigateToHomePage()

    }

    navigateToHomePage() {
        this.props.history.push({
            pathname: '/make-a-story/'})
    }

    render() {
        return (
            <div className="gamePage">

                <div className="gamePageContainer">
                    <h1 className="gameCode">{this.state.gameCode}</h1>
                    <p>This is the last<br/> sentence someone wrote<br/> in your story &darr;</p>
                    <h1 className="lastSentence">{this.state.lastSentence}</h1>

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
                <div className="textArea">
                    <input placeholder="Write your sentence here... You must use the given words!"
                           value={this.state.newSentence}  onChange={(e) => {this.handleInput(e)}}/>

                </div>

                <button className="btn blue circular" type="button" onClick={this.submitNewSentence}>Done</button>

            </div>
        );
    }



}



