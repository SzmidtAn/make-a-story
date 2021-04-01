(this["webpackJsonpmake-a-story"]=this["webpackJsonpmake-a-story"]||[]).push([[0],{38:function(e,t,n){},40:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(4),c=n.n(a),o=n(31),r=n.n(o),s=(n(38),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),o(e),r(e)}))}),i=n(13),d=n(14),l=n(16),h=n(15),u=n(18),j=n(8),m=n(2),b=function(e){var t=e.title,n=e.showItemsDescription;return Object(m.jsx)("div",{className:"wordItem",onClick:n,children:Object(m.jsx)("h2",{className:"header",children:t})})},p=function(e){var t=e.title,n=e.description,a=e.pronunciation;return Object(m.jsxs)("div",{className:"itemDetail",children:[Object(m.jsx)("h1",{className:"header",children:t}),Object(m.jsx)("h2",{className:"pronunciation",children:a}),Object(m.jsxs)("p",{className:"descriptionItem",children:["Definition: ",n]})]})},g=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"wordList",children:this.props.contacts.map(this.props.wordTowordItem)})}}]),n}(c.a.Component),O=n(19),v=(n(26),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[],getWord:"",getDetailsToThisWord:!1,gameCode:"",lastSentence:"",newSentence:"",story:"",gameID:""},e.getNewWords=function(t){e.setState({contacts:[],getDetailsToThisWord:!1});for(var n=0;n<2;n++)e.getJsonFromApi(!0)},e.showItemsDescription=function(t){var n=e.getIndex(t.target.textContent),a=e.state.contacts[n];e.setState({getWord:a,getDetailsToThisWord:!0})},e.getIndex=function(t){return e.state.contacts.findIndex((function(e){return e.word===t}))},e.wordTowordItem=function(t,n){var a=t.word,c=t.definition,o=t.pronunciation;switch(n){case"WordItemDescription":return Object(m.jsx)(p,{title:a,description:c,pronunciation:o});default:return Object(m.jsx)(b,{title:a,showItemsDescription:e.showItemsDescription},a)}},e.getGameFromDB=function(t){O.a.firestore().collection("game").where("gamePIN","==",t).get().then((function(n){n.forEach((function(n){console.log("".concat(n.id," => ").concat(n.data())),e.setState({gameCode:t,lastSentence:n.get("lastSentence"),story:n.get("story"),gameID:n.id})}))}))},e.handleInput=function(t){e.setState({newSentence:t.target.value})},e.submitNewSentence=function(){O.a.firestore().collection("game").doc(e.state.gameID).update({lastSentence:e.state.newSentence,story:e.state.story+" "+e.state.newSentence}).then((function(){console.log("Document successfully updated!")})),e.navigateToHomePage()},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.getNewWords(),this.getGameFromDB(this.props.location.gameCode),document.body.style.background="var(--redGradient)"}},{key:"getJsonFromApi",value:function(){var e=this;fetch("https://random-words-api.vercel.app/word").then((function(e){return e.json()})).then((function(t){e.setState({contacts:e.state.contacts.concat(t)})}))}},{key:"navigateToHomePage",value:function(){this.props.history.push({pathname:"/make-a-story/"})}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"gamePage",children:[Object(m.jsxs)("div",{className:"gamePageContainer",children:[Object(m.jsx)("h1",{className:"gameCode",children:this.state.gameCode}),Object(m.jsxs)("p",{children:["This is the last",Object(m.jsx)("br",{})," sentence someone wrote",Object(m.jsx)("br",{})," in your story \u2193"]}),Object(m.jsx)("h1",{className:"lastSentence",children:this.state.lastSentence}),Object(m.jsx)("div",{children:2===this.state.contacts.length?Object(m.jsx)(g,{contacts:this.state.contacts,wordTowordItem:this.wordTowordItem,showItemsDescription:this.showItemsDescription}):"Loading..."})]}),Object(m.jsx)("div",{children:this.state.getDetailsToThisWord?Object(m.jsx)("div",{children:this.wordTowordItem(this.state.getWord,"WordItemDescription")}):""}),Object(m.jsx)("div",{className:"textArea",children:Object(m.jsx)("input",{placeholder:"Write your sentence here... You must use the given words!",value:this.state.newSentence,onChange:function(t){e.handleInput(t)}})}),Object(m.jsx)("button",{className:"btn blue circular",type:"button",onClick:this.submitNewSentence,children:"Done"})]})}}]),n}(c.a.Component)),f=(n(40),n(33)),x=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={code:""},e.getDataFromDB=function(t){f.a.firestore().collection("game").where("gamePIN","==",t).get().then((function(n){n.forEach((function(n){e.navigateToGamePage(t)}))})).then(e.setState({code:"Incorrect Game PIN"}))},e.navigateToGamePage=function(t){e.props.history.push({pathname:"/make-a-story/game",gameCode:t})},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){document.body.style.background="var(--orangeGradient)"}},{key:"startGameWithCode",value:function(e){6===this.state.code.length?this.getDataFromDB(e):this.setState({code:"Game PIN must contains 6 digits"})}},{key:"handleInput",value:function(e){"Game PIN must contains 6 digits"===this.state.code||"Incorrect Game PIN"===this.state.code?this.setState({code:""}):this.setState({code:e.target.value})}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"home",children:[Object(m.jsx)("h1",{children:"WHAT HAPPENS NEXT?"}),Object(m.jsxs)("p",{children:["Generate the code and share it with your friends to create a fun story together! You need to add a new sentence with two given words and complete What Happens Next?",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"You can choose from 3 vocabulary levels - Beginner, Intermediate and Advanced.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"To make it harder you can only see the last sentence someone wrote, and when the story is complete you can read the whole thing.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"Improve your English and have fun!"]}),Object(m.jsx)(u.b,{to:"/make-a-story/create-new-game",children:Object(m.jsx)("button",{className:"btn blue circular",children:"Create new game"})}),Object(m.jsx)("h3",{children:"Or do you already have code?"}),Object(m.jsxs)("div",{className:"gamePin",children:[Object(m.jsx)("input",{placeholder:"Game PIN",value:this.state.code,onClick:function(t){e.handleInput(t)},onChange:function(t){e.handleInput(t)}}),Object(m.jsx)("button",{className:"btn red small",onClick:function(){return e.startGameWithCode(e.state.code)},children:"Enter"})]})]})}}]),n}(c.a.Component),y=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){document.body.style.backgroundColor="var(--orange)"}},{key:"goToCode",value:function(e){this.props.history.push({pathname:"/make-a-story/GameCodeViewPage",level:e})}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"createNewGamePage",children:[Object(m.jsx)("h1",{children:"Select your level"}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"circle blueGradient",children:" "}),Object(m.jsxs)("div",{className:"card blue",children:[Object(m.jsxs)("p",{children:["You want learn English",Object(m.jsx)("br",{}),"and your current level",Object(m.jsx)("br",{}),"is BASIC"]}),Object(m.jsx)("button",{onClick:function(){return e.goToCode("Beginner")},children:"Beginner"})]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"circle redGradient",children:" "}),Object(m.jsxs)("div",{className:"card red",children:[Object(m.jsxs)("p",{children:["You can speak English",Object(m.jsx)("br",{}),"and want to practice",Object(m.jsx)("br",{}),"with other people"]}),Object(m.jsx)("button",{onClick:function(){return e.goToCode("Intermediate")},children:"Intermediate"})]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"circle orangeDarkGradient",children:" "}),Object(m.jsxs)("div",{className:"card orangeDark",children:[Object(m.jsxs)("p",{children:["You are PRO",Object(m.jsx)("br",{}),"and you want to learn",Object(m.jsx)("br",{}),"new, difficult words"]}),Object(m.jsx)("button",{onClick:function(){return e.goToCode("Advanced")},children:"Advanced"})]})]})]})}}]),n}(c.a.Component),w=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={code:Math.floor(888888*Math.random()+111111)},e.createNewGame=function(t){var n=O.a.firestore();console.log(n),n.collection("game").add({gamePIN:e.state.code.toString(),level:e.props.location.level,story:""}).then((function(t){console.log("Document written with ID: ",t.id),e.props.history.push({pathname:"/make-a-story/game",gameCode:e.state.code.toString()})})).catch((function(e){console.error("Error adding document: ",e)}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){document.body.style.backgroundColor="var(--orange)"}},{key:"goToCode",value:function(e){this.createNewGame()}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"GameCodeView",children:[Object(m.jsx)("h2",{children:"Your Game PIN is:"}),Object(m.jsxs)("h1",{children:[" ",this.state.code,"           "]}),Object(m.jsxs)("h3",{children:["Level: ",this.props.location.level]}),Object(m.jsx)("button",{className:"btn blue circular",onClick:function(){return e.goToCode(e.state.code)},children:"Start"})]})}}]),n}(c.a.Component);O.a.initializeApp({apiKey:"AIzaSyCwnpHYoYR1rqd79iASD08rTkS1gd6ZPkw",authDomain:"make-a-story.firebaseapp.com",projectId:"make-a-story",storageBucket:"make-a-story.appspot.com",messagingSenderId:"737035725955",appId:"1:737035725955:web:4746258ce6d0a32312ffb6"});O.a.firestore(),O.a;var k=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(m.jsx)(u.a,{children:Object(m.jsxs)("div",{className:"appContainer",children:[Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)(u.b,{to:"/make-a-story/",children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsx)(u.b,{to:"/make-a-story/game",children:"Game"})}),Object(m.jsx)("li",{children:Object(m.jsx)(u.b,{to:"/make-a-story/create-new-game",children:"Create new game"})})]}),Object(m.jsx)(j.a,{exact:!0,path:"/make-a-story/",component:x}),Object(m.jsx)(j.a,{path:"/make-a-story/game",component:v}),Object(m.jsx)(j.a,{path:"/make-a-story/create-new-game",component:y}),Object(m.jsx)(j.a,{path:"/make-a-story/GameCodeViewPage",component:w})]})})}}]),n}(c.a.Component);r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(k,{})}),document.getElementById("root")),s()}},[[51,1,2]]]);
//# sourceMappingURL=main.934e2ef4.chunk.js.map