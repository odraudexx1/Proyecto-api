const router = require("express").Router();

module.exports  = (models) =>{

    router.post("/", async(req, res) => {
        const  newCustomer = req.body;
        try {
            await models.Customer.create(newCustomer);
            res.send({message: 'ok'});
        } catch (error) {
            res.status(400).send({message: 'Error en la BD'});
        }
    });

    router.get("/", async(req, res) => {
        const employee = req.query.employee;
        const exists = await models.Employee.findOne({where: {EmployeeId:employee} });

        if(exists){
            const AttendCustomer = await models.Customer.findAll({where:{SupportRepId:req.query.employee}});
            res.send({AttendCustomer});
        }else{
            res.status(403).send({message: 'El employee no existe'});
        }
    });

    router.get("/:id/genres", async (req,res) =>{
        const idCustomer = req.params.id;
        const exists = await models.Customer.findOne({where: {CustomerId:idCustomer} });

        if(exists){
            const invoices = await models.Invoices.findAll( { where: {CustomerId:idCustomer} }  );
            if(invoices){
                const invoicesItem = await models.InvoiceItem.findAll( {where: {invoiceId: invoices.map((item) => {
                    return item.InvoicesId}  )}});
                if(invoicesItem){
                    const tracks = await models.Tracks.findAll( {where: {TracksId : invoicesItem.map((item) => {
                        return item.TrackId}  )}});
                
                    if(tracks){
                        const genres = await models.Genres.findAll( {where: {GenresId : tracks.map((item) => {
                            return item.GenresId}  )}}   );
                        
                        res.send(genres);
                    }
                }  else  { res.status(403).send({message: 'No se le cargo items al invoice'}); }
            } else  {  res.status(403).send({message: 'El Cliente no tiene invoices'});  }
        }else {  res.status(403).send({message: 'El Cliente no existe'}); }
    } );

    router.get("/:id/tracks", async (req, res) => {
        const idCustomer = req.params.id;
        const exists = await models.Customer.findOne({where: {CustomerId:idCustomer} });

        if(exists){
            const invoices = await models.Invoices.findAll( { where: {CustomerId:idCustomer} }  );

            if(invoices){
                const invoicesItem = await models.InvoiceItem.findAll( {where: {invoiceId: invoices.map((item) => {
                    return item.InvoicesId}  )}});

                if(invoicesItem){
                    const tracks = await models.Tracks.findAll( {where: {TracksId : invoicesItem.map((item) => {
                        return item.TrackId}  )}});
                    
                    res.send(tracks);
                }
            }
        }
    });
    return router;
}