const express = require("express");
const router = express.Router();
const  {getAll, getOne, postOne, updateOne, deleteOne ,getAllFromTeam } = require("../queries/groupsQueries");

router.get("/", async (req, res) => { 
    let group = await getAll();
    let {start , end, name } = req.query;
    start = Number(start)
    end = Number(end)
    if(start && end){
        group = group.filter(team => team.id >= start && team.id <= end)
    }
    if(name){
        group = group.filter(team => team.name.includes(name))
      }
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
    const id = Number(req.params.id);
    const groupData = req.body;
    console.log(groupData, 'checking group data')
    let individualGroup = await updateOne(groupData, id)
    // console.log(individualGroup, 'checking group data')
    res.json( individualGroup)
   } catch (error) {
    console.log(error)
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