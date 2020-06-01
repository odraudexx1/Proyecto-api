const router = require("express").Router();

module.exports  = (models) =>{

    router.get("/", async (req, res) =>{
        const MediaTypes = await models.MediaTypes.findAll({
            attributes: ["MediaTypeId", "Name"]
        });
        res.send(MediaTypes);
    });

    router.post("/", async(req, res) => {
        const  newMediaTypes = req.body;
        try {
            await models.MediaTypes.create(newMediaTypes);
            res.send({message: 'ok'});
        } catch (error) {
            res.status(400).send({message: 'Error en la BD'});
        }
    });

    return router;
}