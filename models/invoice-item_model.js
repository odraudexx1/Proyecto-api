const Sequelize = require('sequelize');
const Model = Sequelize.Model;

class Invoices_Item extends Model{}

module.exports = (sequelize) => Invoices_Item.init(
    {
        InvoicesItemId: { 
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        UnitPrice: {
            type: Sequelize.NUMBER
        },
        Quantity:{
            type: Sequelize.INTEGER
        }
    },
    {
        sequelize,
        modelName:'invoices_items'
    }
);
