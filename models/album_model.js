const Sequelize = require('sequelize');
const Model = Sequelize.Model;

class Album extends Model {}

module.exports = (sequelize) => Album.init(
    {
        AlbumId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Title: {
            type: Sequelize.STRING(160)
        }
    },
    {
        sequelize,
        modelName: 'albums'
    }
);
