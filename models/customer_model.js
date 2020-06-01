const Sequelize = require('sequelize');
const Model = Sequelize.Model;

class Customer extends Model {}

module.exports = (sequelize) => Customer.init(
    {
        CustomerId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        FirstName: {
            type: Sequelize.STRING(40)
        },
        lastName: {
            type: Sequelize.STRING(20)
        },
        Company:{
            type: Sequelize.STRING(80)
        },
        Address:{
            type: Sequelize.STRING(70)
        },
        City: {
            type: Sequelize.STRING(40)
        },
        State: {
            type: Sequelize.STRING(40)
        },
        Country:{
            type: Sequelize.STRING(40)
        },
        PostalCode:{
            type: Sequelize.STRING(10)
        },
        Phone:{
            type: Sequelize.STRING(24)
        },
        Fax:{
            type: Sequelize.STRING(24)
        },
        Email:{
            type: Sequelize.STRING(60)
        }
    },
    {
        sequelize,
        modelName:'customers'
    }
);
