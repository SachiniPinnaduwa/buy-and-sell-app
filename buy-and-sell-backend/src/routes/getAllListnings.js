// const fakeListings = require("./fake-data");
const db = require("../database");

module.exports = {
  method: "GET",
  path: "/api/listings",
  handler: async (req, h) => {
    const { results } = await db.query("SELECT * FROM listings");

    return results;
  },
};
