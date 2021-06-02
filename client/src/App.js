import "./App.css";
import { useState } from "react";
import spotifyLogo from "./images/spotify.png";
import axios from "axios";

function App() {
    const [textboxValue, setTextboxValue] = useState("");

    const handleSubmit = () => {
        console.log(textboxValue);
    };

    return (
        <div className="App">
            <h1 className="title">Spotify Search</h1>
            <img className="spotify-logo" alt="spotify logo" src={spotifyLogo} />
            <input
                className="input-box"
                type="text"
                value={textboxValue}
                onChange={e => setTextboxValue(e.target.value)}
            />
            <button className="search-btn" onClick={handleSubmit}>
                Search
            </button>
        </div>
    );
}

export default App;
