const express = require("express");
const cors = require("cors"); 
const app = express();

const teamsControllers = require("./controllers/teamsControlers");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/teams", teamsControllers)
app.use("/teams/:id", teamsControllers)


app.get("/", (req, res) => {
  res.send("Welcome to Express Baseball Teams App !");
});

module.exports = app;