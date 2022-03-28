import request from "supertest";
import Application from "../src/app";
import sinon from "sinon";

// import proxyquire from "proxyquire";
// import database from "./__mocks__/database.mock";
import { Vehicle } from "../src/models/vehicle.model";
import Database from "../src/config/database.config";

// import { Vehicle } from "./__mocks__/models.mock/vehicle.model.mock";
// // import { Model, DataTypes } from "sequelize-mock";
// import { mocked } from "ts-jest/utils";

const app = new Application().app;

// <jest.mock("sequelize", () => {
//   return database;
// });>

beforeEach(() => {
  // sinon.stub(database, "authenticate").resolves();
  // sinon.stub(database, "sync").resolves();
  // sinon.stub(database, "close").resolves();
  // sinon.stub(database.models.Vehicle, "init").resolves();
  // sinon.stub(Vehicle, "init").resolves();
  // sinon.stub(Database, "getInstance").yields(null, Database);
  // jest.useFakeTimers("legacy");
  // jest.advanceTimersByTime(1000);
  // proxyquire("../config/database.config", {
  //   "/home/brutalcorpse/workspace/job-search/shippify-api/src/config/database.config": database
  // });
  // proxyquire("../src/models/vehicle.model", {
  //   sequelize: Database.getInstance(),
  //   "./vehicle.model": Vehicle
  // });
});

jest.useFakeTimers();
describe("List vehicles by driver", () => {
  it("should return 200 OK", async () => {
    const response = await request(app).get("/api/" + app.get("version") + "/vehicle?driverId=1");
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
  });

  it("should return 400 if not passed id", async () => {
    const response = await request(app).get("/api/" + app.get("version") + "/vehicle");
    expect(response.status).toBe(400);
    expect(response.type).toBe("application/json");
    expect(response.body.message).toContain("body is not valid");
  });
});
