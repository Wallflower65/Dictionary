import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
return (
<div className="App">
<div className="container">
<header className="App-header">
{/* We removed the <img> tag that was looking for 'logo' here */}
</header>
<main>
<Dictionary />
</main>
</div>
</div>
);
}