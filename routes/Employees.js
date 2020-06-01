const router = require("express").Router();

module.exports = (models) => {
    router.get("/", async (req, res) =>{
        const Employees = await models.Employee.findAll({
            attributes: ["EmployeeId", "LastName", "FirstName","Title","BirthDate","HireDate","Address","ReportsTo"]
        });
        res.send(Employees);
    });

    router.post("/", async(req, res) => {
        const  newEmployee = req.body;
        try {
            await models.Employee.create(newEmployee);
            res.send({message: 'ok'});
        } catch (error) {
            res.status(400).send({message: 'Error en la BD'});
        }
    });

    router.put("/:id", async(req, res) =>{
        const EmployeeId = req.params.id;
        const employee = await models.Employee.findOne({where : {EmployeeId}});
        if(employee){
            const ActEmployee = req.body;
            await models.Employee.update(ActEmployee,{where: {EmployeeId}});
            res.send({message:'ok'});
        }else {
            res.status(403).send({message: 'El employee no existe'});
        }
    });

    router.get("/:id", async(req,res) =>{
        const EmployeeId = req.params.id;
        const employee = await models.Employee.findOne({where : {EmployeeId}});
        if(employee){
            const SubEmployee = await models.Employee.findAll({where:{ReportsTo:EmployeeId}});
            res.send(SubEmployee);
        }
        else{
            res.status(403).send({message: 'El employee no existe'});
        }
    });

    return router
}