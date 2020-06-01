require('dotenv').config()
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const models = require("./configure-db");

const EmployeesApi = require("./routes/Employees")(models);
const CustomerApi = require("./routes/Customer")(models);
const invoicesApi = require("./routes/invoices")(models);
const invoicesItemApi = require("./routes/invoices_items")(models);
const AlbumsApi = require("./routes/Albums")(models);
const ArtistApi = require("./routes/Artist")(models);
const TracksApi = require("./routes/Tracks")(models);
const PlaylistTracksApi = require("./routes/Playlist_track")(models);
const PlaylistApi = require("./routes/playlist")(models);
const mediaTypesApi = require("./routes/mediaTypes")(models);
const genresApi = require("./routes/Genres")(models);

app.set("views", "./views");
app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/employees", EmployeesApi);
app.use("/api/customers", CustomerApi);
app.use("/api/invoices", invoicesApi);
app.use("/api/invoicesItems", invoicesItemApi);
app.use("/api/albums", AlbumsApi);
app.use("/api/artists", ArtistApi);
app.use("/api/tracks", TracksApi);
app.use("/api/playlistTracks", PlaylistTracksApi);
app.use("/api/playlists", PlaylistApi);
app.use("/api/mediaType", mediaTypesApi);
app.use("/api/genres", genresApi);

const port = process.env.PORT || 3000;

app.all("/", (req,res) => {
    res.render("index",{
        nombreApi: "Tienda de Musica"
    });
});

app.listen(port, () => {
    console.log(`Servidor ejecutandose en el puerto ${port}`);
});