const express = require("express");
const cors = require("cors"); 
const app = express();

const teamsControllers = require("./controllers/teamsControlers");
const groupsControllers = require("./controllers/groupsControlers");
const playersStatsControllers = require("./controllers/playersStatsControlers");
const pitchersStatsControllers = require("./controllers/pitcherStatsControlers");
// const playersCareerControllers = require("./controllers/playersCareerControlers");
// const pitchersCareerControllers = require("./controllers/pitchersCarrerControlers");


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/teams", teamsControllers)
app.use("/groups", groupsControllers)
app.use("/playersStats", playersStatsControllers)
//app.use("/playersStatsCareer", playersStatsCareerControllers)
app.use("/pitchersStats", pitchersStatsControllers)
//app.use("/pitchersCarrer", pitchersCarrerControllers)


app.get("/", (req, res) => {
  res.send("Welcome to Express Baseball Teams App !");
});

module.exports = app;