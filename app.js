const express = require("express");
const cors = require("cors"); 
const app = express();

const teamsControllers = require("./controllers/teamsControlers");
const groupsControllers = require("./controllers/groupsControlers");
const playersStatsControllers = require("./controllers/playersStatsControlers");
// const playersCareerControllers = require("./controllers/playersCareerControlers");
// const pitchersStatsControllers = require("./controllers/pitchersStatsControlers");
// const pitchersCareerControllers = require("./controllers/pitchersCarrerControlers");


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/teams", teamsControllers)
// app.use("/teams/:id", teamsControllers)
app.use("/groups", groupsControllers)
// app.use("/groups/:id", groupsControllers)
// app.use("/groups/team/:team_id", groupsControllers)

app.use("/playersStats", playersStatsControllers)

// app.use("/playersStats/:id", playersStatsControllers)
// app.use("/playersStats/season/:players_id", playersStatsControllers)

//app.use("/playersStatsCareer", playersStatsCareerControllers)
//app.use("/pitchersStats", pitchersStatsControlers)
//app.use("/pitchersCarrer", pitchersCarrerControlers)


app.get("/", (req, res) => {
  res.send("Welcome to Express Baseball Teams App !");
});

module.exports = app;