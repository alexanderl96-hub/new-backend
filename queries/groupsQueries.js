const db = require("../db/dbconfig");

const getAll = async () =>{
    return await db.any("SELECT * FROM group");
}

module.exports = { getAll }