const db = require("../db/dbconfig");

const getAllRecord = async () =>{
    return await db.any("SELECT * FROM records");
}

const getOneRecord = async (id) =>{
    return await db.one("SELECT * FROM records WHERE id = $1", [id]);
}

const postOneRecord = async (dataRecord) =>{
    const {  name , imag, record, modernDayRecord, closestSince, closestActivePlayer, closestUnderthirty, sumary } = dataRecord;

    return await db.one(
     ` INSERT INTO records ( name , imag, record, modernDayRecord, closestSince, closestActivePlayer, closestUnderthirty, sumary )  VALUES  
     ( $1, $2, $3, $4, $5, $6, $7, $8 )   RETURNING * `, 
     [ name , imag, record, modernDayRecord, closestSince, closestActivePlayer, closestUnderthirty, sumary ]
    );
}

const deleteOneRecord = async (id) =>{
    return  await db.oneOrNone('DELETE FROM records WHERE id = $1', [id]);
}


module.exports =  {getAllRecord , getOneRecord, postOneRecord,  deleteOneRecord }