const addViewToListingRoute = require("./addViewToListing");
const createNewListingRoute = require("./createNewListing");
const deleteListingRoute = require("./deleteListing");
const getAllListningsRoute = require("./getAllListnings");
const getListningRoute = require("./getListnings");
const getUserListingsRoute = require("./getUserListings");
const updateListingRoute = require("./updateListing");

module.exports = [
  addViewToListingRoute,
  createNewListingRoute,
  deleteListingRoute,
  getAllListningsRoute,
  getListningRoute,
  getUserListingsRoute,
  updateListingRoute,
];
