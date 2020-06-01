const Sequelize = require('sequelize');
const Model = Sequelize.Model;

class Genres extends Model{}

module.exports = (sequelize) => Genres.init(
    {
        GenresId: { 
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
        modelName:'Genres'
    }
);
