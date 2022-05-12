const db = require("../db/dbconfig");

const getAll = async () =>{
    return await db.any("SELECT * FROM teams");
}

const getOne = async (id) =>{
    return  await db.one('SELECT * FROM teams WHERE id = $1', [id]);
}

const postOne = async (teamData) =>{
    const {name, imag} = teamData;
    return  await db.one(
        " INSERT INTO teams (name, imag ) VALUES ( $1, $2) RETURNING * ", 
    [name, imag]);
}

const updateOne = async ( teamData, id) =>{
    const existingTeam = await getOne(id);

    const name = teamData.name || existingTeam.name;
    const imag = teamData.imag || existingTeam.imag;
   
    return  await db.one( "UPDATE teams SET name = $1, imag = $2 WHERE id = $3 RETURNING * ", 
    [name, imag, id]);
}

const deleteOne = async (id) =>{
    return  await db.oneOrNone('DELETE FROM teams WHERE id = $1', [id]);
}


module.exports = { getAll , getOne, postOne, updateOne, deleteOne };