// lsp-disable-next-line
const axios = require("axios");
const Querystring = require("querystring");

const getToken = async () => {
    const config = {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    };
    const body = Querystring["stringify"]({
        grant_type: "client_credentials",
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
    });

    try {
        const response = await axios.post("https://accounts.spotify.com/api/token", body, config);
        return response.data;
    } catch (err) {
        console.log(err);
    }
};

module.exports = getToken;
