/* jshint esversion: 8 */
const mongoose = require("mongoose");
const uniquevalidator = require("mongoose-unique-validator");

let Schema = mongoose.Schema;
let CustomerSchema = new Schema({
    _id: {
        type: Number,
        default: 1
    },
    Address: {
        type: String,
        required: [true, "Address is required"]
    },
    City: {
        type: String,
        required: [true, "City is required"]
    },
    Country: {
        type: String,
        required: [true, "Country is required"]
    },
    District: {
        type: String,
        required: [true, "District is required"]
    },
    FirstName: {
        type: String,
        required: [true, "First Name is required"]
    },
    LastName: {
        type: String,
        required: [true, "Last Name is required"]
    },
    Status: {
        type: Boolean,
        default: true
    }
});

CustomerSchema.plugin(uniquevalidator, {
    message: "{PATH} Debe que ser único"
});

module.exports = mongoose.model("Customer", CustomerSchema);