import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
const [keyword, setKeyword] = useState("");

function handleResponse(response) {
console.log(response.data);
// We will use this to display the definition soon!
}

function search(event) {
event.preventDefault();

}

function handleKeywordChange(event) {
setKeyword(event.target.value);
}

return (
<div className="Dictionary">
<form onSubmit={search}>
<input
type="search"
onChange={handleKeywordChange}
placeholder="Search for a word..."
/>
</form>
</div>
);
}