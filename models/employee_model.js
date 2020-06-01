const Sequelize = require('sequelize');
const Model = Sequelize.Model;

class employees extends Model {}

module.exports = (sequelize) => employees.init(
    {
        EmployeeId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        LastName: {
            type: Sequelize.STRING(20)
        },
        FirstName: {
            type: Sequelize.STRING(20)
        },
        Title: {
            type: Sequelize.STRING(30)
        },
        BirthDate:{
            type: Sequelize.DATE
        },
        HireDate:{
            type: Sequelize.DATE
        },
        Address:{
            type:Sequelize.STRING(70)
        }
    },
    {
        sequelize,
        modelName:'employees'
    }
);
