/* jshint esversion: 8 */
const mongoose = require("mongoose");
const uniquevalidator = require("mongoose-unique-validator");

let Schema = mongoose.Schema;
var listingsAndReviewSchema = new Schema(
  {
    request: String,
    time: Number
  },
  {
    collection: "listingsAndReviews"
  }
);

listingsAndReviewSchema.plugin(uniquevalidator, {
  message: "{PATH} Debe que ser único"
});

module.exports = mongoose.model("listingsAndReview", listingsAndReviewSchema);
