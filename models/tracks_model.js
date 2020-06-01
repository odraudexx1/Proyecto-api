const Sequelize = require('sequelize');
const Model = Sequelize.Model;

class Tracks extends Model{}

module.exports = (sequelize) => Tracks.init(
    {
        TracksId: { 
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Name: {
            type: Sequelize.STRING(200)
        },
        Composer:{
            type: Sequelize.STRING(220)
        },
        Milliseconds:{
            type: Sequelize.INTEGER
        },
        Bytes:{
            type: Sequelize.INTEGER
        },
        UnitPrice:{
            type: Sequelize.NUMBER
        }
    },
    {
        sequelize,
        modelName:'tracks'
    }
);
