const db = require("../db/dbconfig");

const getAll = async () =>{
    return await db.any("SELECT * FROM careers_stats");
}
const getOne = async (id) =>{
    return  await db.one('SELECT * FROM careers_stats WHERE id = $1', [id]);
}
const getOneFromStats = async (playerID) =>{
    return await db.any("SELECT * FROM careers_stats WHERE players_id = $1", [playerID]);
}
const postOne = async (statsData) =>{
    const { players_id, game_year, team, career_gp, career_ab, career_r, career_h, career_rbi, career_bb, career_so, career_hr, career_average } = statsData;

    return await db.one(
     ` INSERT INTO careers_stats 
     (players_id, game_year, team, career_gp, career_ab, career_r, career_h, career_rbi, career_bb, career_so, career_hr, career_average) 
    VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)  
    RETURNING * `, 
     [players_id, game_year, team, career_gp, career_ab, career_r, career_h, career_rbi, career_bb, career_so, career_hr, career_average]);
}
const updateOne = async ( statsData, id) =>{
    const existingStats = await getOne(id);

    const players_id = statsData.players_id || existingStats.players_id;
    const game_year = statsData.game_year || existingStats.game_year;
    const team = statsData.team || existingStats.team;
    const career_gp = statsData.career_gp || existingStats.career_gp;
    const career_ab = statsData.career_ab || existingStats.career_ab;
    const career_r = statsData.career_r || existingStats.career_r;
    const career_h = statsData.career_h || existingStats.career_h;
    const career_rbi =  statsData.career_rbi || existingStats.career_rbi;
    const career_bb = statsData.career_bb || existingStats.career_bb;
    const career_so = statsData.career_so || existingStats.career_so;
    const career_hr = statsData.career_hr || existingStats.career_hr;
    const career_average = statsData.career_average || existingStats.career_average;
   
    return  await db.one( "UPDATE careers_stats SET players_id = $1, game_year = $2, team = $3, career_gp = $4, career_ab = $5, career_r = $6, career_h = $7, career_rbi = $8, career_bb = $9, career_so = $10, career_hr = $11, career_average = $12 WHERE id = $13 RETURNING * ", 
    [ players_id, game_year, team, career_gp, career_ab, career_r, career_h, career_rbi, career_bb, career_so, career_hr, career_average, id]);
}

const deleteOne = async (id) =>{
    return  await db.oneOrNone('DELETE FROM careers_stats WHERE id = $1', [id]);
}

module.exports = { getAll, getOne, getOneFromStats, postOne, updateOne, deleteOne}