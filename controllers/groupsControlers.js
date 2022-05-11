const express = require("express");
const router = express.Router();
const  getAll  = require("../queries/groupsQueries");

router.get("/", async (req, res) => { 
    let group = await getAll();
    res.json(group);
});

module.exports = router;  