const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
    });
    mainWindow.loadURL("http://localhost:3000");
}

app.whenReady().then(() => {
    createWindow();

    app.on("activate", function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on("window-all-closed", function () {
    if (process.platform !== "darwin") app.quit();
});

{
    const dotenv = require("dotenv");
    dotenv.config();

    const express = require("express");
    const app = express();
    const searchSpotify = require("./helpers/searchSpotify");
    const addProductService = require("./helpers/addProductService");

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.get("/spotify/:query", async (req, res) => {
        const query = req.params.query;

        const responseData = await searchSpotify(query);

        res.send(responseData);
    });

    app.post("/db", async (req, res) => {
        addProductService(req.body);
        res.status(200).json({ msg: "nailed it" });
    });

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
