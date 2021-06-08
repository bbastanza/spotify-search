import "./App.css";
import { useState } from "react";
import spotifyLogo from "./images/spotify.png";
import axios from "axios";
import Album from "./Album";

function App() {
    const [textboxValue, setTextboxValue] = useState("");
    const [albums, setAlbums] = useState([]);

    const handleSubmit = async () => {
        try {
            console.log(textboxValue);

            const res = await axios.get(`http://localhost:5000/spotify/${textboxValue}`);
            if (res.status !== 200) {
                console.log(res.data);
            }
            const data = res.data;
            console.log(data);

            setAlbums(data);
        } catch (error) {
            throw error;
        }
    };

    const addProduct = async albumData => {
        console.log(albumData);

        // try {
        //     const res = await axios.post(`http://localhost:5000/admin/add`, {
        //         spotifyId: albumData.spotifyId,
        //         genre: albumData.genre,
        //         price: albumData.price,
        //     });
        //     if (res.status !== 200) {
        //         const data = res.data;
        //         throw new Error("spotify call failed");
        //     }
        //     console.log(res.data);

        //     return res.data;
        // } catch (error) {
        //     throw error;
        // }
    };

    return (
        <div className="App">
            <h1 className="title">Record Store Admin</h1>
            <img className="spotify-logo" alt="spotify logo" src={spotifyLogo} />
            <h2 className="title">Spotify Search</h2>
            <input
                className="input-box"
                type="text"
                placeholder="album search"
                value={textboxValue}
                onChange={e => setTextboxValue(e.target.value)}
                onKeyPress={e => {
                    if (e.code === "Enter") handleSubmit();
                }}
            />
            <button className="search-btn" onClick={handleSubmit}>
                Search
            </button>
            {albums.length > 0 &&
                albums.map(album => {
                    return <Album addProduct={addProduct} album={album} key={album.id} />;
                })}
        </div>
    );
}

export default App;
