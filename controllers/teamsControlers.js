const express = require('express');
const router = express.Router();

const teamData = require("../TeamsData.json");

router.get("/", (req, res) => {
    res.json({ teamData })
});

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