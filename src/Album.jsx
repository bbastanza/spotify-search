import { useState } from "react";

const Album = ({ album, addProduct }) => {
    const [state, setState] = useState({ genre: "", price: 20 });
    const addItem = () => {
        addProduct({
            genre: state.genre,
            price: state.price,
            id: album.id,
        });
    };
    console.log(album);

    const handleChange = e => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    return (
        <div
            style={{
                width: "70%",
                backgroundColor: "#444",
                boxShadow: "1px 1px 8px #404040",
                borderRadius: 5,
                padding: 20,
                margin: 10,
            }}>
            {!!album && (
                <div style={{ width: "60%", margin: "auto" }}>
                    <div style={{ display: "flex", justifyContent: "left", paddingLeft: 50 }}>
                        <div style={{ width: 300, padding: 20, textAlign: "left" }}>
                            <h2 className="album-name">Artist:</h2>
                            <h2 className="album-name">Album:</h2>
                        </div>
                        <div style={{ padding: 20, textAlign: "left", width: 300 }}>
                            <h2 className="album-name">{album?.artistName}</h2>
                            <h2 className="album-name">{album?.albumName}</h2>
                        </div>
                    </div>
                    <input
                        className="input-box"
                        name="genre"
                        type="text"
                        placeholder="genre"
                        value={state.genre}
                        onChange={e => handleChange(e)}
                    />
                    <input
                        className="input-box"
                        name="price"
                        step=".01"
                        type="number"
                        placeholder="price"
                        value={parseFloat(state.price).toFixed(2)}
                        onChange={e => handleChange(e)}
                    />
                    <button className="add-btn" onClick={addItem}>
                        Add Album
                    </button>
                </div>
            )}
        </div>
    );
};

export default Album;
