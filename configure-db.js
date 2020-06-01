const Sequelize = require("sequelize");

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
});

sequelize.authenticate()
    .then(()=> {
        console.log("Conexión a la base de datos establecida");
    })
    .error((error)=> {
        console.error(error);
    });

const Album = require("./models/album_model")(sequelize);
const Artist = require("./models/artists")(sequelize);
const Customer = require("./models/customer_model")(sequelize);
const Employee = require("./models/employee_model")(sequelize);
const Genres = require("./models/genres_model")(sequelize);
const InvoiceItem = require("./models/invoice-item_model")(sequelize);
const Invoices = require("./models/invoices")(sequelize);
const MediaTypes = require("./models/media-types_model")(sequelize);
const Playlist = require("./models/playlist_model")(sequelize);
const PlaylistTrack = require("./models/playlist-track_model")(sequelize);
const Tracks = require("./models/tracks_model")(sequelize);

Employee.hasMany(Employee,{foreignKey:'ReportsTo', as:'BossFK'});
Employee.hasMany(Customer,{foreignKey:'SupportRepId', as:'EemployeeFK'});
Customer.hasMany(Invoices,{foreignKey:'CustomerId', as:'CustomerFKC'});
Invoices.hasMany(InvoiceItem,{foreignKey:'InvoiceId', as:'InvoiceFK'});
Tracks.hasMany(InvoiceItem,{foreignKey:'TrackId', as:'TrackFK'});
Artist.hasMany(Album,{foreignKey:'ArtistsId', as:'ArtistFK'});
Genres.hasMany(Tracks,{foreignKey:'GenresId', as:'GenresFK'});
Album.hasMany(Tracks,{foreignKey:'AlbumId', as:'AlbumFK'});
MediaTypes.hasMany(Tracks,{foreignKey:'MediaTypesId', as:'MediaTypeFK'});

Tracks.belongsToMany(Playlist, {through: 'Playlist_Tracks', foreignKey: 'TrackId', as:'TrackIdPFk'});
Playlist.belongsToMany(Tracks,{through: 'Playlist_Tracks', foreignKey: 'PlaylistId', as:'PlaylistsKF' });

sequelize.sync();

module.exports = {
    Album,
    Artist,
    Customer,
    Employee,
    Genres,
    InvoiceItem,
    Invoices,
    MediaTypes,
    Playlist,
    PlaylistTrack,
    Tracks
}