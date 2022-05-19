const db = require("../db/dbconfig");

const getAll = async () =>{
    return await db.any("SELECT * FROM group_dev");
}

const getAllFromTeam = async (teamId) =>{
    return await db.any("SELECT * FROM group_dev WHERE team_id = $1 ", [teamId] );
}

const getOne = async (id) =>{
    return await db.one("SELECT * FROM group_dev WHERE id = $1", [id]);
}
const postOne = async (groupData) =>{
    const {  name, team_id, nickname, imag, born, city, state, country, age, height, weight, current_team, salary, number, education, spouse, parents, children, siblings, position, bats, throws, stats, about } = groupData;

    return await db.one(
     ` INSERT INTO group_dev 
    (name,team_id, nickname, imag, born, city, state, country, age, height, weight, current_team, salary, number, education, spouse, parents, children, siblings, position, bats, throws, stats, about ) 
    VALUES 
    ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24) 
    RETURNING * `, 
     [name, team_id, nickname, imag, born, city, state, country, age, height, weight, current_team, salary, number, education, spouse, parents, children, siblings, position, bats, throws, stats, about]
    );
}

const updateOne = async ( groupData, id) =>{
    const existingGroup = await getOne(id);

    const name = groupData.name || existingGroup.name;
    const imag = groupData.imag || existingGroup.imag;
    const nickname = groupData.nickname || existingGroup.nickname;
    const born = groupData.born || existingGroup.born;
    const city = groupData.city || existingGroup.city;
    const state = groupData.state || existingGroup.state;
    const country = groupData.country || existingGroup.country;
    const age =  groupData.age || existingGroup.age;
    const height = groupData.height || existingGroup.height;
    const weight = groupData.weight || existingGroup.weight;
    const currentTeam = groupData.currentTeam || existingGroup.currentTeam;
    const salary = groupData.salary || existingGroup.salary;
    const number = groupData.number || existingGroup.number;
    const education = groupData.education || existingGroup.education;
    const spouse = groupData.spouse || existingGroup.spouse;
    const parents = groupData.parents || existingGroup.parents;
    const children  = groupData.children || existingGroup.children;
    const siblings = groupData.siblings || existingGroup.siblings;
    const position = groupData.position || existingGroup.position;
    const bats = groupData.bats || existingGroup.bats;
    const throws = groupData.throws || existingGroup.throws;
    const stats = groupData.stats || existingGroup.stats;
    const about = groupData.about || existingGroup.about;
   
    return  await db.one( "UPDATE group_dev SET name = $1, nickname = $2, imag = $3, born = $4, city = $5, state = $6, country = $7, age = $8, height = $9, weight = $10, current_team = $11, salary = $12, number = $13, education = $14, spouse = $15, parents = $16, children = $17, siblings = $18, position = $19, bats = $20, throws = $21, stats = $22, about = $23 WHERE id = $24 RETURNING * ", 
    [ name, nickname, imag, born, city, state, country, age, height, weight, currentTeam, salary, number, education, spouse, parents, children, siblings, position, bats, throws, stats, about, id]);
}

const deleteOne = async (id) =>{
    return  await db.oneOrNone('DELETE FROM group_dev WHERE id = $1', [id]);
}


module.exports =  {getAll , getOne, postOne, updateOne, deleteOne , getAllFromTeam}