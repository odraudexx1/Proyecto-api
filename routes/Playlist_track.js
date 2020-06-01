const router = require("express").Router();

module.exports  = (models) =>{

    router.get("/", async (req, res) =>{
        const PlaylistTrack = await models.PlaylistTrack.findAll({
            attributes: ["PlaylistId", "TrackId"]
        });
        res.send(PlaylistTrack);
    });

    router.post("/", async(req, res) => {
        const  newPlaylistTrack = req.body;
        console.log(req.body);
        try {
            await models.PlaylistTrack.create(newPlaylistTrack);
            res.send({message: 'ok'});
        } catch (error) {
            res.status(400).send({message: 'Error en la BD'});
        }
    });

    return router;
}