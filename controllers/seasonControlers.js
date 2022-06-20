const express = require("express");
const router = express.Router();
const {getAll, getOne, postOne, updateOne, deleteOne} = require('../queries/seasonQuieres');

router.get('/', async( req, res ) =>{
    let season = await getAll()
    res.json( season)
})

router.get('/:id', async( req, res ) =>{
    try {
        const seasonId = Number(req.params.id);
        const seasonbyId = await getOne(seasonId);
        if(seasonbyId){
            let payload = {
                status: 'Success', 
                season: seasonbyId
              }
              res.json(payload);
        }else{
            throw 'team id not found'
        }
    } catch (error) {
        res.send('Sorry, no season id found, try again later!!!')
    }
})

router.post('/', async (req, res)=>{
    try {
        const seasonData = req.body;
        const newSeason = await postOne(seasonData);
        res.json(newSeason);
    } catch (error) {
        res.send('Sorry, POST router is not working, try again later!!!') 
    }
})

router.put('/:id', async ( req, res)=>{
    try {
        const updateId = Number(req.params.id);
        const seasonData = req.body
        const updatebyId = await updateOne(seasonData, updateId);
        res.json(updatebyId);
    } catch (error) {
        res.send('Sorry, PUT router is not working, try again later!!!')
    }
})

router.delete('/:id', async ( req, res)=>{
    try {
        const updateId = Number(req.params.id);
        await deleteOne(updateId)
        res.json({status: 'Success', message: 'Season has been deleted successfully'})
    } catch (error) {
        res.send('Sorry, none team has been deleted, please try again or check DELETE router')
    }
})
module.exports = router;