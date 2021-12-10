const request = require("supertest");

const app = require("../routes/userApi");

describe("POST /auth/login", () => {
  describe("given a email and password", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app)
        .post("http://localhost:5000/auth/login")
        .send({
          email: "aa",
          password: "aa",
        });
      expect(response.statusCode).toBe(200);
    });
  });
});
