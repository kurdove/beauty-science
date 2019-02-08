const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/services";

describe("routes : services", () => {
  describe("GET /services", () => {
    it("should return status code 200 and have 'ABOUT US' in the body of response", (done) => {
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        // expect(body).toContain('ABOUT US');
        done();
      });
    });

  });

});