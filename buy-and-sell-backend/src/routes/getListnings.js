// const fakeListings = require("./fake-data");
const db = require("../database");
const Boom = require("@hapi/boom");

module.exports = {
  method: "GET",
  path: "/api/listings/{id}",
  handler: async (req, h) => {
    const { id } = req.params;

    const { results } = await db.query("SELECT * FROM listings WHERE id =?", [
      id,
    ]);
    const listing = results[0];
    if (!listing) throw Boom.notFound(`Listing doesnot exist with id ${id} `);
    return listing, h.response(listing).code(200);
  },
};
