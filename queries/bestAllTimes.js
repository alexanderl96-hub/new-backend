const db = require("../db/dbconfig");

const getAllBAT = async () =>{
    return await db.any("SELECT * FROM best_all_Times");
}

const getOneBAT = async (id) =>{
    return await db.one("SELECT * FROM best_all_Times WHERE id = $1", [id]);
}

const postOneBAT = async (dataBAT) =>{
    const {  name, imag, sumary} = dataBAT;

    return await db.one(
     ` INSERT INTO best_all_Times (name, imag, sumary )  VALUES  ( $1, $2, $3 )   RETURNING * `, 
     [name, imag, sumary]
    );
}

const deleteOneBAT = async (id) =>{
    return  await db.oneOrNone('DELETE FROM best_all_Times WHERE id = $1', [id]);
}


module.exports =  {getAllBAT , getOneBAT, postOneBAT,  deleteOneBAT }