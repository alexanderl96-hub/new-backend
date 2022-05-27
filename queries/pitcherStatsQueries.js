const db = require("../db/dbconfig");

const getAll = async () =>{
    return await db.any("SELECT * FROM pitcher_stats");
}

const getOne = async (id) =>{
    return  await db.one('SELECT * FROM pitcher_stats WHERE id = $1', [id]);
}
const getOneFromStats = async (pitcherID) =>{
    return await db.any("SELECT * FROM pitcher_stats WHERE players_id = $1 ", [pitcherID]);
}

const postOne = async (statsData) =>{
    const {players_id, game, game_date, ip, h, r, er, hr, bb, so, sv, era} = statsData;
    return  await db.one(
        `INSERT INTO pitcher_stats 
        (players_id, game, game_date, ip, h, r, er, hr, bb, so, sv, era) 
        VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) 
        RETURNING * `, 
    [players_id, game, game_date, ip, h, r, er, hr, bb, so, sv, era]);
}

const updateOne = async ( teamData, id) =>{
    const existingPitcher = await getOne(id);

    const pitcherId = teamData.players_id || existingPitcher.players_id;
    const game = teamData.game || existingPitcher.game;
    const gameDate = teamData.game_date || existingPitcher.game_date;
    const ip = teamData.ip || existingPitcher.ip;
    const h = teamData.h || existingPitcher.h;
    const r = teamData.r || existingPitcher.r;
    const er = teamData.er || existingPitcher.er;
    const hr = teamData.hr || existingPitcher.hr;
    const bb = teamData.bb || existingPitcher.bb;
    const so = teamData.so || existingPitcher.so;
    const sv = teamData.sv || existingPitcher.sv;
    const era = teamData.era || existingPitcher.era;

    return  await db.one( "UPDATE pitcher_stats SET players_id = $1, game = $2, game_date = $3, ip = $4, h = $5, r = $6, er = $7, hr = $8, bb = $9, so = $10, sv = $11, era = $12 WHERE id = $13 RETURNING * ", 
    [pitcherId, game, gameDate, ip, h, r, er, hr, bb, so, sv, era, id]);
}

const deleteOne = async (id) =>{
    return  await db.oneOrNone('DELETE FROM pitcher_stats WHERE id = $1', [id]);
}


module.exports = { getAll , getOne, getOneFromStats, postOne, updateOne, deleteOne };