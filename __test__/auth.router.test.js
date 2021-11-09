'use strict'; 

const supertest = require("supertest");
const { server } = require("../src/server");
const { db } = require("../src/models/index");
const mockRequest = supertest(server);

beforeAll(async (done) => {
  await db.sync();
  done();
});

afterAll(async (done) => {
  await db.drop();
  done();
});

describe("auth routes",()=>{
   

});
