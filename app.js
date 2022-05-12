const express = require("express");
const cors = require("cors"); 
const app = express();

const teamsControllers = require("./controllers/teamsControlers");
const groupsControllers = require("./controllers/groupsControlers");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/teams", teamsControllers)
app.use("/teams/:id", teamsControllers)
app.use("/groups", groupsControllers)
app.use("/groups/:id", groupsControllers)
app.use("/groups/team/:team_id", groupsControllers)


app.get("/", (req, res) => {
  res.send("Welcome to Express Baseball Teams App !");
});

module.exports = app;