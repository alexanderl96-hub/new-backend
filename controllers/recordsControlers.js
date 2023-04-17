const express = require("express");
const router = express.Router();
const { getAllRecord , getOneRecord, postOneRecord,  deleteOneRecord  } = require("../queries/records");

router.get("/", async (req, res) => { 
    let allrecords = await getAllRecord();
    res.json(allrecords);
});

router.get("/:id", async (req, res) => { 
    try {
        const recordID = Number(req.params.id);
        const existingrecordId = await getOneRecord(recordID);
        
        if (existingrecordId) {
            let payload = {
              status: 'Success', 
              careerPlayer: existingrecordId
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
      const recorData = req.body;
      const individualrecorData = await postOneRecord(recorData)
      res.json( individualrecorData)
    } catch (error) {
      res.send('Sorry, POST router is not working, try again later!!!')
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const recordID = Number(req.params.id);
        await deleteOneRecord(recordID)
        res.json({status: 'Success', message: 'Item has been deleted successfully'})
    } catch (error) {
        res.send('Sorry, none item has been deleted, please try again or check DELETE router')
    }
});
    
 module.exports = router;  