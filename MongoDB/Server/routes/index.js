/* jshint esversion: 8 */
//agrupa todos los archivos-rutas
const express = require("express");
const app = express();
app.use("/customer", require("./customer/customer"));
app.use("/rental", require("./rental/rental"));
app.use("/property", require("./listingsAndReviews/listingsAndReview"));
app.use(require("../dump/backup"));
module.exports = app;