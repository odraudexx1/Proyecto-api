const Sequelize = require('sequelize');
const Model = Sequelize.Model;

class playlist extends Model{}

module.exports = (sequelize) => playlist.init(
    {
        playlistId: { 
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Name: {
            type: Sequelize.STRING(120)
        }
    },
    {
        sequelize,
        modelName:'playlists'
    }
);

