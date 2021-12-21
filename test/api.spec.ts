import request from "supertest";

import app from "../src/app";

beforeEach(() => {});

describe("GET /api", () => {
  it("should return 200 OK", async () => {
    const response = await request(app).get("/api/" + app.get("version"));

    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
    expect(response.body.message).toBe("Hello World");
  });
});
