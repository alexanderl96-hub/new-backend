const express = require('express');
const router = express.Router();
const { getAll, getOne, postOne, updateOne, deleteOne } = require("../queries/teamsQueries");

router.get("/", async (req, res) => {
    let teams = await getAll()
    console.log(teams)
    let {start , end, name } = req.query;
    start = Number(start)
    end = Number(end)
    if(start && end){
        teams = teams.filter(team => team.id >= start && team.id <= end)
    }
    if(name){
        teams = teams.filter(team => team.name.includes(name))
      }
    //   if(player){
    //     teams = teams.gruop.filter(team => team.city.includes(player))
    //     console.log(teams, 'player')
    //   }
     res.json(teams)
});

//get individual students by id
router.get("/:id", async (req, res) => {
  try {
    const teamID = Number(req.params.id);
    const existingTeam = await getOne(teamID);
    if (existingTeam) {
      let payload = {
        status: 'Success', 
        team: existingTeam
      }
      res.json(payload);
    }else{
      throw 'team id not found'
    }
  } catch (error) {
    res.send('Sorry, no team found, try again later!!!')
  }
  
});

router.post("/", async (req, res) => {
  try {
    const teamData = req.body;
    const individualTeam = await postOne(teamData)
    res.json( individualTeam)
  } catch (error) {
    res.send('Sorry, POST router is not working, try again later!!!')
  }
 });

router.put("/:id", async (req, res) => {
   try {
    const memberID = Number(req.params.id);
    const teamData = req.body;
    let individualTeam = await updateOne(teamData, memberID)
    res.json( individualTeam)
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
     res.send('Sorry, none team has been deleted, please try again or check DELETE router')
   }
 })

module.exports = router;