const router = require("express").Router();

module.exports  = (models) =>{

    router.get("/", async (req, res) =>{
        const Artist = await models.Artist.findAll({
            attributes: ["ArtistsId", "Name"]
        });
        res.send(Artist);
    });

    router.post("/", async(req, res) => {
        const  newArtist = req.body;
        try {
            await models.Artist.create(newArtist);
            res.send({message: 'ok'});
        } catch (error) {
            res.status(400).send({message: 'Error en la BD'});
        }
    });

    return router;
}