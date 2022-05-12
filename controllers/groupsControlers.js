const express = require("express");
const router = express.Router();
const  {getAll, getOne, postOne, updateOne, deleteOne ,getAllFromTeam } = require("../queries/groupsQueries");

router.get("/", async (req, res) => { 
    let group = await getAll();
    res.json(group);
});

router.get("/:id", async (req, res) => { 
    try {
        const groupID = Number(req.params.id);
        const existingGroup = await getOne(groupID);
        
        if (existingGroup) {
            let payload = {
              status: 'Success', 
              team: existingGroup
            }
            res.json(payload);
          }else{
            throw 'Group id not found'
          }
    } catch (error) {
        res.send('Sorry, something went wrong Id not found...')
    }
});
router.get("/team/:team_id", async (req, res) => { 
  try {
      const memberID = Number(req.params.team_id);
      const groupMembers = await getAllFromTeam(memberID);
      console.log(groupMembers, 'groupMembers')
      
      if (groupMembers) {
          let payload = {
            status: 'Success', 
            team: groupMembers
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
      const groupData = req.body;
      const individualGroup = await postOne(groupData)
      res.json( individualGroup)
    } catch (error) {
      res.send('Sorry, POST router is not working, try again later!!!')
    }
   });

router.put("/:id", async (req, res) => {
   try {
    const memberID = Number(req.params.id);
    const groupData = req.body;
    let individualGroup = await updateOne(groupData, memberID)
    res.json( individualGroup)
   } catch (error) {
     res.send('Sorry, PUT router is not working, try again later!!!')
   }
 });

   router.delete("/:id", async (req, res) => {
    try {
     const memberID = Number(req.params.id);
     await deleteOne(memberID)
     res.json({status: 'Success', message: 'Team has been deleted successfully'})
    } catch (error) {
      res.send('Sorry, none group has been deleted, please try again or check DELETE router')
    }
  })


module.exports = router;  