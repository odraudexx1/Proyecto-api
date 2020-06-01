const router = require("express").Router();

module.exports  = (models) =>{

    router.get("/", async (req, res) =>{
        const idInv = await models.Invoices.findOne(  {where: {InvoicesId:req.query.invoiceId}} );
        if(idInv){
            try {
                const invoicesItem = await models.InvoiceItem.findAll(  {where: {InvoiceId:idInv.InvoicesId}} );
                res.send(invoicesItem);
            } catch (error) {
                res.status(400).send({message: 'Error en la BD'});
            }
        }else{
            res.status(403).send({message: 'El invoice no existe'});
        }
    });

    router.post("/", async(req, res) => {
        const  newInvoices = req.body;
        try {
            await models.Invoices.create(newInvoices);
            res.send({message: 'ok'});
        } catch (error) {
            res.status(400).send({message: 'Error en la BD'});
        }
    });

    router.get("/:idCustomer", async (req,res) => {
        const CustomerId = req.params.idCustomer;
        const invoices = await models.Invoices.findAll({where : {CustomerId:CustomerId}});
        res.send(invoices);
    });

    return router;
}