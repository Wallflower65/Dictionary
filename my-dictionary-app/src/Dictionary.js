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
  setPhotos(response.data.photos);
}

function search(event) {
  event.preventDefault();

  // Dictionary API
  let dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
  axios.get(dictionaryApiUrl).then(handleDictionaryResponse);

  // Pexels API
  let pexelsApiKey = "4ISppFer3WD3BY3tORzbLLgX9UiIBFHZQkl6ZQO6n63ZEGBIQFjhBZfr";
  let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;

  let headers = {
    Authorization: pexelsApiKey,
  };

  axios.get(pexelsApiUrl, { headers: headers }).then(handleImagesResponse);
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
<footer>
          This project was coded by{" "}
          <a
            href="https://github.com/Wallflower65"
            target="_blank"
            rel="noopener noreferrer"
          >
            Phaphamani Zoneleni
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Wallflower65/Dictionary"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://weather-react-phaphamani.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
</div>
);
}