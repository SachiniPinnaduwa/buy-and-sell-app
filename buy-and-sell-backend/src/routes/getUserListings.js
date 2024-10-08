const admin = require("firebase-admin");
const db = require("../database");

const getUserListingsRoute = {
  method: "GET",
  path: "/api/users/{userId}/listings",
  handler: async (req, h) => {
    const token = req.header.authtoken;
    const user = await admin.auth().verifyIdToken(token);
    const userId = req.params.userId;

    if (user.user_id !== userId)
      throw Boom.unauthorized("Users only acess their own listings!");

    const { results } = await db.query(
      "SELECT * FROM listings WHERE user_id=?",
      [userId]
    );

    return results;
  },
};

module.exports = [getUserListingsRoute];
