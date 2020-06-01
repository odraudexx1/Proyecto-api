const Sequelize = require('sequelize');
const Model = Sequelize.Model;

class playlist_Track extends Model{}

module.exports = (sequelize) => playlist_Track.init(
    {
        TrackId:{
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        PlaylistId:{
            type: Sequelize.INTEGER,
            primaryKey: true
        }
    },
    {
        sequelize,
        modelName:'Playlist_Track'
    }
);
