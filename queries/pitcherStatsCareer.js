const db = require("../db/dbconfig");

const getAll = async () =>{
    return await db.any("SELECT * FROM pitcher_stats");
}

const getOne = async (id) =>{
    return  await db.one('SELECT * FROM pitcher_stats WHERE id = $1', [id]);
}
const getOneFromStats = async (playerID) =>{
    return await db.any("SELECT * FROM pitcher_stats WHERE players_id = $1 ", [playerID]);
}

const postOne = async (statsData) =>{
    const {players_id, game, game_date, ip, h, r, er, hr, bb, so, sv, era} = statsData;
    return  await db.one(
        `INSERT INTO pitcher_stats 
        (players_id, game, game_date, ip, h, r, er, hr, bb, so, sv, era) 
        VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11,) 
        RETURNING * `, 
    [name, imag]);
}

const updateOne = async ( teamData, id) =>{
    const existingTeam = await getOne(id);

    const name = teamData.name || existingTeam.name;
    const imag = teamData.imag || existingTeam.imag;
   
    return  await db.one( "UPDATE pitcher_stats SET name = $1, imag = $2 WHERE id = $3 RETURNING * ", 
    [name, imag, id]);
}

const deleteOne = async (id) =>{
    return  await db.oneOrNone('DELETE FROM pitcher_stats WHERE id = $1', [id]);
}


module.exports = { getAll , getOne, getOneFromStats, postOne, updateOne, deleteOne };