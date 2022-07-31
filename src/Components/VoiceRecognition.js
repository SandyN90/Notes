import React from "react";
import { useState } from "react";


export default function VoiceRecognition() {

const [text, setText] = useState([]);
// const [newText[], setNewText[]] = useState([]);

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const Grammer = window.SpeechGrammarList || window.webkitSpeechGrammarList;

const Recognition = new SpeechRecognition();
const GrammarList = new Grammer();

const colors = [ 'aqua' , 'azure' , 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral', /* … */ ];
const grammar = `#JSGF V1.0; grammar colors; public <color> = ${colors.join(' | ')};`

GrammarList.addFromString(grammar, 1);
Recognition.list = GrammarList;
Recognition.conitnuous = false;
Recognition.lang = 'en-us';
Recognition.interimResults = false;
Recognition.maxAlternatives = 1;

const startRecognition = () => {
  Recognition.start();
}

Recognition.onresult = (event)=> {
  let textFound = event.results[0][0].transcript;

  setText(arr => [...arr, ` ${textFound}`]);
  console.log(text);
  console.log(`Confidence: ${event.results[0][0].confidence}`);
}

  return (
    <>
    <div id="voiceData">{text}</div>
    <button onClick={startRecognition}>
      Start Recognition
    </button>
    </>

    )
}
