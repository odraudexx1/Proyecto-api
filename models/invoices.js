const Sequelize = require('sequelize');
const Model = Sequelize.Model;

class Invoices extends Model{}

module.exports = (sequelize) => Invoices.init(
    {
        InvoicesId: { 
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        InvoicedDate: {
            type: Sequelize.DATE
        },
        BillingAddress:{
            type: Sequelize.STRING(100)
        },
        BillingCity:{
            type: Sequelize.STRING(100)
        }
    },
    {
        sequelize,
        modelName:'invoices'
    }
);
