const express = require("express");
const cors = require("cors"); 
const server = express();

require("dotenv").config();
const PORT = process.env.PORT;

server.use(cors());
const teamsControllers = require("./controllers/teamsControlers")

server.use("/teams", teamsControllers)
server.use("/teams/:id", teamsControllers)


server.get("/", (req, res) => {
  res.send("Welcome to Express Baseball Teams App !");
});


server.listen(PORT, () => {
  console.log(`🪨 Listening on port ${PORT} 💎 `);
});
module.exports = server;