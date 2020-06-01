const router = require("express").Router();

module.exports  = (models) =>{

    router.get("/", async (req, res) =>{
        const invoiceItem = await models.InvoiceItem.findAll({
            attributes: ["InvoicesItemId", "UnitPrice", "Quantity","InvoiceId","TrackId"]
        });
        res.send(invoiceItem);
    });

    router.post("/", async(req, res) => {
        const  newInvoiceItem = req.body;
        try {
            await models.InvoiceItem.create(newInvoiceItem);
            res.send({message: 'ok'});
        } catch (error) {
            res.status(400).send({message: 'Error en la BD'});
        }
    });

    return router;
}