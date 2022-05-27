const express = require("express");
const router = express.Router();
const {getAll , getOne, getOneFromStats, postOne, updateOne, deleteOne }= require('../queries/pitcherStatsQueries');

router.get("/", async (req, res) => { 
    let playerStats = await getAll();
    res.json(playerStats);
});
router.get("/:id", async (req, res) => { 
    try {
        const statsID = Number(req.params.id);
        const existingStats = await getOne(statsID);
        
        if (existingStats) {
            let payload = {
              status: 'Success', 
              stats: existingStats
            }
            res.json(payload);
          }else{
            throw 'Group id not found'
          }
    } catch (error) {
        res.send('Sorry, something went wrong Id not found...')
    }
});

router.get("/stats/:players_id", async (req, res) => { 
    try {
        const statplayerID = Number(req.params.players_id);
        const statSingPlayer = await getOneFromStats(statplayerID);   
        if (statSingPlayer) {
            let payload = {
              status: 'Success', 
              stats: statSingPlayer
            }
            res.json(payload);
          }else{
            throw 'Group id not found'
          }
    } catch (error) {
        res.send('Sorry, something went wrong Id not found...')
    }
  });

router.post("/", async (req, res) => {
try {
    const statsData = req.body;
    const statsShowData = await postOne(statsData)
    res.json( statsShowData)
} catch (error) {
    res.send('Sorry, POST router is not working, try again later!!!')
}
});

router.put("/:id", async (req, res) => {
    try {
        const memberID = Number(req.params.id);
        const teamData = req.body;
        let individualStats = await updateOne(teamData, memberID)
        res.json( individualStats)
    } catch (error) {
        
        res.send('Sorry, PUT router is not working, try again later!!!')
    }
    });

router.delete("/:id", async (req, res) => {
try {
    const statsID = Number(req.params.id);
    await deleteOne(statsID)
    res.json({status: 'Success', message: 'Team has been deleted successfully'})
} catch (error) {
    res.send('Sorry, none group has been deleted, please try again or check DELETE router')
}
})
      
  module.exports = router;