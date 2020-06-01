const router = require("express").Router();

module.exports  = (models) =>{

    router.post("/", async(req, res) => {
        const  newTracks = req.body;
        try {
            await models.Tracks.create(newTracks);
            res.send({message: 'ok'});
        } catch (error) {
            res.status(400).send({message: 'Error en la BD'});
        }
    });

    router.get("/", async(req,res) => {
        const ArtistName = req.query.artist;
        if(ArtistName){
            const Artists = await models.Artist.findOne({where : {Name:ArtistName}});
            if(Artists){
                const Albums = await models.Album.findAll({where : {ArtistsId : Artists.ArtistId}});
                if(Albums){
                    const Alltracks =  await models.Tracks.findAll({where: {AlbumId: Albums.map((item) => {return item.AlbumId}  )    }});
                    
                    console.log(Alltracks);
                    res.send(Alltracks);
                }
            }
        }
    });

    return router;
}