const db = require("../db/dbconfig");

const getAll = async () =>{
    return await db.any("SELECT * FROM careerpitcher_stats");
}

const getOne = async (id) =>{
    return  await db.one('SELECT * FROM careerpitcher_stats WHERE id = $1', [id]);
}
const getOneFromStats = async (pitcherID) =>{
    return await db.any("SELECT * FROM careerpitcher_stats WHERE pitcher_id = $1 ", [pitcherID]);
}
const postOne = async (statsData) =>{
    const {pitcher_id, game_year, team, career_gp, career_cg, career_er, career_so, career_w, career_l, career_sv, career_whip, career_era} = statsData;
    return  await db.one(
        `INSERT INTO careerpitcher_stats 
        (pitcher_id, game_year, team, career_gp, career_cg, career_er, career_so, career_w, career_l, career_sv, career_whip, career_era) 
        VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) 
        RETURNING * `, 
    [pitcher_id, game_year, team, career_gp, career_cg, career_er, career_so, career_w, career_l, career_sv, career_whip, career_era]);
}

const updateOne = async ( teamData, id) =>{
    const existingPitcher = await getOne(id);

    const pitcher_id = teamData.pitcher_id || existingPitcher.pitcher_id;
    const game_year = teamData.game_year || existingPitcher.game_year;
    const team = teamData.team || existingPitcher.team;
    const career_gp = teamData.career_gp || existingPitcher.career_gp;
    const career_cg = teamData.career_cg || existingPitcher.career_cg;
    const career_er = teamData.career_er || existingPitcher.career_er;
    const career_so = teamData.career_so || existingPitcher.career_so;
    const career_w = teamData.career_w || existingPitcher.career_w;
    const career_l = teamData.career_l || existingPitcher.career_l;
    const career_sv = teamData.career_sv || existingPitcher.career_sv;
    const career_whip = teamData.career_whip || existingPitcher.career_whip;
    const career_era = teamData.career_era || existingPitcher.career_era;

    return  await db.one( "UPDATE careerpitcher_stats SET pitcher_id = $1, game_year = $2, team = $3, career_gp = $4, career_cg = $5, career_er = $6, career_so = $7, career_w = $8, career_l = $9, career_sv = $10, career_whip = $11, career_era = $12 WHERE id = $13 RETURNING * ", 
    [pitcher_id, game_year, team, career_gp, career_cg, career_er, career_so, career_w, career_l, career_sv, career_whip, career_era]);
}

const deleteOne = async (id) =>{
    return  await db.oneOrNone('DELETE FROM careerpitcher_stats WHERE id = $1', [id]);
}

module.exports = { getAll , getOne, getOneFromStats, postOne, updateOne, deleteOne };