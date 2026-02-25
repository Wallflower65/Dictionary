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

function handlePexelsResponse(response) {
setPhotos(response.data.photos);
}

function search(event) {
event.preventDefault();

}

function handleKeywordChange(event) {
setKeyword(event.target.value);
}

return (

<div className="Dictionary">
<section>
<h1>What word do you want to look up?</h1>
<form onSubmit={search}>
<input type="search" onChange={handleKeywordChange} placeholder="Search for a word..." />
</form>
</section>

</div>
);
}