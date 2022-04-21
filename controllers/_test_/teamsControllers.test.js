const server = require("../../server");
const supertest = require("supertest");

describe("return jason data for an individual team", ()=>{
    it("Get / team/1", async ()=>{
        await supertest(server)
        .get("/team/1")
        .expect(200)
        .then((res)=>{
            expect(res.body.name).to.equal("New York Yankees")
        });
    });
});