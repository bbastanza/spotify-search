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
            }}>
            {!!album && (
                <>
                    <h2 className="album-name">{album?.name}</h2>
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
                </>
            )}
        </div>
    );
};

export default Album;
