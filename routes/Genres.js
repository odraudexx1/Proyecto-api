const router = require("express").Router();

module.exports  = (models) =>{

    router.get("/", async (req, res) =>{
        const Genres = await models.Genres.findAll({
            attributes: ["GenreId", "Name"]
        });
        res.send(Genres);
    });

    router.post("/", async(req, res) => {
        const  newGenres = req.body;
        try {
            await models.Genres.create(newGenres);
            res.send({message: 'ok'});
        } catch (error) {
            res.status(400).send({message: 'Error en la BD'});
        }
    });

    return router;
}