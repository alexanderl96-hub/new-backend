const express = require("express");
const router = express.Router();
const { getAllBAT , getOneBAT, postOneBAT,  deleteOneBAT } = require("../queries/bestAllTimes");

router.get("/", async (req, res) => { 
    let playerStats = await getAllBAT();
    res.json(playerStats);
});

router.get("/:id", async (req, res) => { 
    try {
        const itemID = Number(req.params.id);
        const existingItemId = await getOneBAT(itemID);
        
        if (existingItemId) {
            let payload = {
              status: 'Success', 
              careerPlayer: existingItemId
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
      const bestData = req.body;
      const individualBestData = await postOneBAT(bestData)
      res.json( individualBestData)
    } catch (error) {
      res.send('Sorry, POST router is not working, try again later!!!')
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const bestID = Number(req.params.id);
        await deleteOneBAT(bestID)
        res.json({status: 'Success', message: 'Item has been deleted successfully'})
    } catch (error) {
        res.send('Sorry, none item has been deleted, please try again or check DELETE router')
    }
});
    
 module.exports = router;  