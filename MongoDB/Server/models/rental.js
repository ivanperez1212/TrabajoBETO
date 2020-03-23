const mongoose = require("mongoose");
const uniquevalidator = require("mongoose-unique-validator");
const customers = require("./customer");
var now = new Date();
let Schema = mongoose.Schema;
let RentalSchema = new Schema({
  Customer: {
    type: Schema.Types.Number,
    ref: "customers",
    required: [true, "Customer is required"]
  },
  Property: {
    type: Schema.Types.Number,
    ref: "listingsAndReviews",
    required: [true, "Property is required"]
  },
  Date: {
    type: Date
  }
});

RentalSchema.plugin(uniquevalidator, {
  message: "{PATH} Debe que ser único"
});

module.exports = mongoose.model("Rental", RentalSchema);
