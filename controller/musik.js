const musikModel = require('../models/musik.model')



async function getMusik (req, res,){
    const getMusik = await musikModel.musik.findAll();
    res.status(200).send({
        status: 200,
        data: getMusik,
        message: 'sukses telah mengambil semua data'})
  };

  async function postMusik(req, res) {
    console.log(req.files[0].fieldname) 
    /*
    contoh bentuk req.file
    {
  fieldname: 'album',
  originalname: 'RUNDOWN BUAYA VOL.2 FIX.png',
  encoding: '7bit',
  mimetype: 'image/png',
  destination: 'uploads/',
  filename: 'album-1685695013798.jpg',
  path: 'uploads\\album-1685695013798.jpg',
  size: 408894

    */ 
   console.log( req.body.UrlMusik)
    console.log(req.body.UrlAlbum)
    const addMusik = await musikModel.musik.create({
      tittle: req.body.tittle,
      album: req.body.Album,
      genre: req.body.genre,
      // file name dapat dilihat dari route app.js 
      filenameAlbum: req.files[0].filename,
      filenameMusik:req.files[1].filename,
      urlAlbum: req.body.UrlAlbum,
      urlMusik: req.body.UrlMusik,
    }); 
  
    res.status(201).send({
      status: 201,
      data: addMusik,
      message: 'Berhasil Menambahkan Lagu',
    });
  }

  async function deleteMusik(req, res){
     await musikModel.musik.destroy({
        where: {
            id: req.params.id,
          }
          //then adalah future function . v = value
    }).then((v) => {
        return res.status(200).json("delete berhasil")
    });
}




  module.exports = {postMusik,getMusik,deleteMusik}