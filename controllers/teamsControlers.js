const express = require('express');
const router = express.Router();

const teamData = require("../TeamsData.json");

//get all data, get group by id, get student by nameMacth
router.get("/", (req, res) => {
    let teams = teamData.teams;
    let {start , end, name, player, gruop, salary, position} = req.query;
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
router.get("/:id", (req, res) => {
   const teamID = req.params.id;
   const teams = teamData.teams;
   const individual = teams.find((team) => team.id === teamID);
   res.json({ individual})
})

// router.get("/team/:id", (req, res) => {
//     const memberID = req.params.id;
//     const members = teamData.teams;
//     const individual = teams.find((team) => team.id === teamID);
//     res.json({ individual})
//  })

module.exports = router