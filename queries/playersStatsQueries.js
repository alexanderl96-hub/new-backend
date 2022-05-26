const db = require("../db/dbconfig");

const getAll = async () =>{
    return await db.any("SELECT * FROM players_stats");
}
const getOne = async (id) =>{
    return  await db.one('SELECT * FROM players_stats WHERE id = $1', [id]);
}
const getOneFromStats = async (playerID) =>{
    return await db.any("SELECT * FROM players_stats WHERE players_id = $1", [playerID]);
}
const postOne = async (statsData) =>{
    const { players_id, game, game_date, ab, r, h, rb, bb, so, hr, sb, average } = statsData;

    return await db.one(
     ` INSERT INTO players_stats 
     (players_id, game, game_date, ab, r, h, rb, bb, so, hr, sb, average) 
    VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)  
    RETURNING * `, 
     [players_id, game, game_date, ab, r, h, rb, bb, so, hr, sb, average]);
}
const updateOne = async ( statsData, id) =>{
    const existingStats = await getOne(id);

    const players_id = statsData.players_id || existingStats.players_id;
    const game = statsData.game || existingStats.game;
    const game_date = statsData.game_date || existingStats.game_date;
    const ab = statsData.ab || existingStats.ab;
    const r = statsData.r || existingStats.r;
    const h = statsData.h || existingStats.h;
    const rb = statsData.rb || existingStats.rb;
    const bb =  statsData.bb || existingStats.bb;
    const so = statsData.so || existingStats.so;
    const hr = statsData.hr || existingStats.hr;
    const sb = statsData.sb || existingStats.sb;
    const average = statsData.average || existingStats.average;
   
    return  await db.one( "UPDATE players_stats SET players_id = $1, game = $2, game_date = $3, ab = $4, r = $5, h = $6, rb = $7, bb = $8, so = $9, hr = $10, sb = $11, average = $12 WHERE id = $13 RETURNING * ", 
    [ players_id, game, game_date, ab, r, h, rb, bb, so, hr, sb, average, id]);
}

const deleteOne = async (id) =>{
    return  await db.oneOrNone('DELETE FROM players_stats WHERE id = $1', [id]);
}

module.exports = { getAll, getOne, getOneFromStats, postOne, updateOne, deleteOne}