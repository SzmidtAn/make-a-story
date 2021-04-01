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
        gameID: "",
        definition: "",
        example: "",
        level: "",
        diffDef: "",
    };

    componentDidMount() {
        this.getGameFromDB(this.props.location.gameCode)
        document.body.style.background = "var(--redGradient)"

    }

    getJsonFromApiAdvanced() {
        fetch("https://random-words-api.vercel.app/word")
            .then(res => res.json())
            .then(json =>
                {this.setState({
                    contacts: this.state.contacts.concat(json),
                    diffDef: json.definition
                })

                }
            );

    }



    getJsonFromApi() {

        fetch("https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=8gs3fw3vcnv65zzemkox7s6b6kudb91pjc2kmlmaqhjvmpy1a\n")
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

        this.setGameLevel()


    }

    setGameLevel() {

        let level = this.state.level


        switch (level){
            case "Beginner":
                //get 2 easy words
                for (let i = 0; i < 2; i++) {
                    this.getJsonFromApi()
                }
                    break
            case "Intermediate":
                //get 1 and 1 easy and difficult
                this.getJsonFromApi()
                this.getJsonFromApiAdvanced()

                    break
            case "Advanced":
                //get 2 difficult words
                this.getJsonFromApiAdvanced()
                this.getJsonFromApiAdvanced()
                    break
            default:
                this.navigateToHomePage()
        }
    }

    showItemsDescription = (e) => {


        let index = this.getIndex(e.target.textContent)
        let getWord = this.state.contacts[index].word

        if (getWord !== this.state.getWord){

        this.getDefinitionFromApi(getWord)


        this.setState({
            getWord: getWord,
            getDetailsToThisWord: true,
            example: ""


        })
        }else {
            this.setState({
            getDetailsToThisWord: !this.state.getDetailsToThisWord,


            })
        }
    }

    getDefinitionFromApi = (getWord) => {


        fetch("https://api.dictionaryapi.dev/api/v2/entries/en_US/" + getWord)
            .then(res => res.json())
            .then(json =>{


                if (json.title !== "No Definitions Found"){


                this.setState({
               definition: json[0].meanings[0].definitions[0].definition + 1,
               example: json[0].meanings[0].definitions[0].example

                })
                    console.log(json[0])

                }else {

                    this.findDefinitionInWordnikAPI(getWord)

                }
            }
            );



    }

    findDefinitionInWordnikAPI = (getWord) => {


            fetch(" https://api.wordnik.com/v4/word.json/" + getWord + "/definitions?limit=200&includeRelated=false&useCanonical=false&includeTags=false&api_key=8gs3fw3vcnv65zzemkox7s6b6kudb91pjc2kmlmaqhjvmpy1a")
                .then(res => res.json())
                .then(json =>{




                    if (json[0] !== undefined){
                        this.setState({
                            definition: (json[0].text ? json[0].text : "error") +3
                        })
                    }else {

                        this.setState({
                            definition: this.state.diffDef + 4,

                        })
                    }
                }
                )
            ;



        }



    getIndex = (title) => {
        return this.state.contacts.findIndex(obj => obj.word === title);
    }

    wordTowordItem  = (word, component) => {
        const title = word.word;
        const description =this.state.definition;
        const example = this.state.example;


        switch (component){
            case "WordItemDescription" :
                return <WordItemDescription title= {title} description={description} example={example}  />;
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

                    this.setState({
                        gameCode: codePIN,
                        lastSentence: doc.get("lastSentence"),
                        story: doc.get("story"),
                        gameID: doc.id,
                        level: doc.get("level")
                    })

                    this.getNewWords()

                });
            })


    }

    handleInput = (e) => {
        this.setState({
            newSentence: e.target.value
        })
    }

    submitNewSentence = () => {
        if (this.state.newSentence.length > 5 ){
        this.checkIfSentenceHasGivenWords()
        }
    }

    navigateToHomePage() {
        this.props.history.push({
            pathname: '/make-a-story/'})
    }

    checkIfSentenceHasGivenWords = () => {

        if (this.state.newSentence.toLowerCase().includes(this.state.contacts[0].word.toLowerCase()) && this.state.newSentence.toLowerCase().includes(this.state.contacts[1].word.toLowerCase())  ){
            this.saveToDB()
        }else {
            this.setState({
                newSentence: "You must to use all given words!"
            })
        }

    }

    saveToDB(){
        firebase
            .firestore()
            .collection("game")
            .doc(this.state.gameID)
            .update({
                "lastSentence" : this.state.newSentence,
                "story" :  this.state.story + " " + this.state.newSentence
            })
            .then(() => {
                this.navigateToHomePage()

            });

    }

    render() {
        return (
            <div className="gamePage">

                <div className="gamePageContainer">
                    <h1 className="gameCode">{this.state.gameCode}</h1>
                    <p>This is the last<br/> sentence someone wrote<br/> in your story &darr;</p>
                    <h1 className="lastSentence">{this.state.lastSentence}</h1>

                    <div >
                        {this.state.contacts.length !== 100?   <WordsList contacts={this.state.contacts} wordTowordItem={this.wordTowordItem}  showItemsDescription={this.showItemsDescription} />
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
                           value={this.state.newSentence} onClick={this.handleInput}  onChange={(e) => {this.handleInput(e)}}/>

                </div>

                <button className="btn blue circular" type="button" onClick={this.submitNewSentence}>Done</button>

            </div>
        );
    }


}

