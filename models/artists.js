const Sequelize = require('sequelize');
const Model = Sequelize.Model;

class Artist extends Model{}

module.exports = (sequelize) => Artist.init(
    {
        ArtistId: {
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
        modelName:'Artists'
    }
);
