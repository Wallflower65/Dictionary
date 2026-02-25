import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
const audio = new Audio(props.phonetic.audio);

function playAudio() {
audio.play();
}

if (props.phonetic.audio) {
return (
<div className="Phonetic">
<button onClick={playAudio} className="audio-button">
Listen
</button>
<span className="text">{props.phonetic.text}</span>
</div>
);
} else {
return <span className="text">{props.phonetic.text}</span>;
}
}