import "./App.css";
import { useState } from "react";
import spotifyLogo from "./images/spotify.png";
import axios from "axios";
import Album from "./Album";

function App() {
    const [textboxValue, setTextboxValue] = useState("");
    const [albums, setAlbums] = useState([{ name: "hardcore", id: "1908hr32180hhr" }]);

    const handleSubmit = async () => {
        try {
            console.log(textboxValue);

            const res = await axios.get(`https://localhost:5001/spotify/search/${textboxValue}`);
            if (res.status !== 200) {
                const data = res.data;
                console.log(data);
                // throw new Error("spotify call failed");
            }
            console.log(res.data);

            // return res.data;
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
            />
            <button className="search-btn" onClick={handleSubmit}>
                Search
            </button>
            {albums.map(album => {
                return <Album addProduct={addProduct} album={album} key={album.name} />;
            })}
        </div>
    );
}

export default App;
