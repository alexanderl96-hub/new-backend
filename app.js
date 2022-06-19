const express = require("express");
const cors = require("cors"); 
const app = express();

const teamsControllers = require("./controllers/teamsControlers");
const groupsControllers = require("./controllers/groupsControlers");
const playersStatsControllers = require("./controllers/playersStatsControlers");
const playersCareerControllers = require("./controllers/playerCareerControlers");
const pitchersStatsControllers = require("./controllers/pitcherStatsControlers");
const pitchersCareerControllers = require("./controllers/pitcherCareerControlers");
const seasonControllers = require("./controllers/seasonControlers")


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/teams", teamsControllers)
app.use("/groups", groupsControllers)
app.use("/playersStats", playersStatsControllers)
app.use("/playersCareer", playersCareerControllers)
app.use("/pitchersStats", pitchersStatsControllers)
app.use("/pitchersCarrer", pitchersCareerControllers)
app.use("/season", seasonControllers)


app.get("/", (req, res) => {
  res.send("Welcome to Express Baseball Teams App !");
});

module.exports = app;