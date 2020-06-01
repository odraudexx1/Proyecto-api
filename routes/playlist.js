const router = require("express").Router();

module.exports  = (models) =>{

    router.get("/:tracks", async (req, res) =>{
        const idTrack = req.params.tracks;
        const exists = await models.Tracks.findOne({ where : {TracksId:idTrack}  });
        if(exists){
            const PlaylistTracks = await models.PlaylistTrack.findAll({ where: {TrackId: idTrack} })

            if(PlaylistTracks){
                const Playlist = await models.Playlist.findAll( {where : { playlistId: PlaylistTracks.map( (item) =>
                    {return item.PlaylistId} ) }} );
                
                res.send(Playlist);
            }
        }else { res.status(400).send({message: 'La cancion no existe'})}
    });

    router.post("/", async(req, res) => {
        const  newPlaylist = req.body;
        try {
            await models.Playlist.create(newPlaylist);
            res.send({message: 'ok'});
        } catch (error) {
            res.status(400).send({message: 'Error en la BD'});
        }
    });

    return router;
}