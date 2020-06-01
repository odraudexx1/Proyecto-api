const router = require("express").Router();

module.exports  = (models) =>{

    router.get("/", async (req, res) =>{
        const idArt = await models.Artist.findOne(  {where: {ArtistId:req.query.artistId}} );
        if(idArt){
            try {
                const Album = await models.Album.findAll(  {where: {ArtistsId:idArt.ArtistId}} );
                res.send(Album);
            } catch (error) {
                res.status(400).send({message: 'Error en la BD'});
            }
        }else{
            res.status(403).send({message: 'El Artistita no existe'});
        }
    });

    router.post("/", async(req, res) => {
        const  newAlbum = req.body;
        try {
            await models.Album.create(newAlbum);
            res.send({message: 'ok'});
        } catch (error) {
            res.status(400).send({message: 'Error en la BD'});
        }
    });

    return router;
}