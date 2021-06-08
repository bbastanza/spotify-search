const axios = require("axios");
const getToken = require("./getToken");

class AlbumData {
    constructor(artistName, albumName, id) {
        this.artistName = artistName;
        this.albumName = albumName;
        this.id = id;
    }
}

const searchSpotify = async query => {
    const token = await getToken();

    const config = {
        headers: {
            Authorization: `Bearer ${token?.access_token}`,
            Accept: "application/json",
        },
    };

    try {
        const response = await axios.get(`https://api.spotify.com/v1/search?q=${query}&type=album`, config);
        const data = response.data;
        const albums = data?.albums.items.map(item => {
            return new AlbumData(item.artists[0].name, item.name, item.id);
        });
        return albums;
    } catch (err) {
        console.log("nope");
    }
};

module.exports = searchSpotify;
