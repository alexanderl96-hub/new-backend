const db = require("../db/dbconfig");

const getAll = async () =>{
    return await db.any("SELECT * FROM season");
}

const getOne = async (id) =>{
    return  await db.one('SELECT * FROM season WHERE id = $1', [id]);
}
const postOne = async (teamData) =>{
    const {date, team_name, team_vs, image_team, image_vs, points_team, points_vs} = teamData;
    return  await db.one(
        ` INSERT INTO season (date, team_name, team_vs, image_team, image_vs, points_team, points_vs ) VALUES 
        ( $1, $2, $3, $4, $5, $6, $7) RETURNING * `, 
    [date, team_name, team_vs, image_team, image_vs, points_team, points_vs]);
}

const updateOne = async ( teamData, id) =>{
    const seasonData = await getOne(id);

    const date = teamData.date || seasonData.date;
    const team_name = teamData.team_name || seasonData.team_name;
    const team_vs = teamData.team_vs || seasonData.team_vs;
    const image_team = teamData.image_team || seasonData.image_team;
    const image_vs = teamData.image_vs || seasonData.image_vs;
    const points_team = teamData.points_team || seasonData.points_team;
    const points_vs = teamData.points_vs || seasonData.points_vs;
   
    return  await db.one( `UPDATE season SET date = $1, team_name = $2, team_vs = $3, image_team = $4, image_vs = $5, 
      points_team = $6, points_vs = $7 WHERE id = $8 RETURNING * `, 
    [date, team_name, team_vs, image_team, image_vs, points_team, points_vs, id]);
}
const deleteOne = async (id) =>{
    return  await db.oneOrNone('DELETE FROM season WHERE id = $1', [id]);
}

module.exports = { getAll , getOne, postOne, updateOne, deleteOne };