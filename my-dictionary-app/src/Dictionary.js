import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
const [keyword, setKeyword] = useState("");
const [results, setResults] = useState(null);
const [photos, setPhotos] = useState(null);

function handleDictionaryResponse(response) {
setResults(response.data[0]);
}

function handleImagesResponse(response) {
setPhotos(response.data.images);
}

function search(event) {
event.preventDefault();
let dictionaryApiUrl = "" + keyword;
axios.get(dictionaryApiUrl).then(handleDictionaryResponse);

let imagesApiKey = "787ofe478b86fc75394a34e4469a2t40";
let imagesApiUrl = "" + keyword + "&key=" + imagesApiKey;
axios.get(imagesApiUrl).then(handleImagesResponse);
}

function handleKeywordChange(event) {
setKeyword(event.target.value);
}

return (

<div className="Dictionary">
<section>
<h1>What word do you want to look up?</h1>
<form onSubmit={search}>
<input type="search" onChange={handleKeywordChange} placeholder="Search for a word..." className="search-input" />
</form>
<div className="hint">i.e. coding, nursing, sunset, forest</div>
</section>
<Results results={results} />
<Photos photos={photos} />
<footer className="footer">
Coded by Your Name, open-sourced on GitHub
</footer>
</div>
);
}