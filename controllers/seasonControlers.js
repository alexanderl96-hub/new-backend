const express = require("express");
const router = express.Router();
const {getAll, getOne, getOneFromStats, postOne, updateOne, deleteOne} = require('../queries/seasonQuieres');

router.get('/', async( req, res ) =>{
    let season = await getAll()
    res.json( season)
})
module.exports = router;