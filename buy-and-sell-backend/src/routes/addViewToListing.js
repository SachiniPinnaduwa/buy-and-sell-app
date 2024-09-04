const db = require("../database");

const addViewToListingRoute = {
  method: "POST",
  path: "/api/listings/{id}/add-view",
  handler: async (req, h) => {
    try {
      const { id } = req.params;
      console.log(`Received request to add view to listing with ID: ${id}`);
      await db.query("UPDATE listings SET views = views+1 WHERE id=?", [id]);

      const { results } = await db.query("SELECT * FROM listings WHERE id=?", [
        id,
      ]);

      const updatedListing = results[0];
      return updatedListing, h.response({ message: "View added" }).code(200);
    } catch (error) {
      console.error("Error adding view to listing:", error);
      throw error; // Let Hapi.js handle the error
    }
  },
};

module.exports = [addViewToListingRoute]; // Export as an array of routes
