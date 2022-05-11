const db = require("../db/dbconfig");

const getAll = async () =>{
    return await db.any("SELECT * FROM group_dev");
}

module.exports =  getAll 