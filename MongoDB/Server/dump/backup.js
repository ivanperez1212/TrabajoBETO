const express = require("express");
const _ = require("underscore");
const mongoose = require("mongoose");
const app = express();
const backup = require("mongodb-backup");

app.get("/backup", (req, res) => {
  backup({
    uri: "mongodb://localhost:27017/sample_airbnb", // mongodb://<dbuser>:<dbpassword>@<dbdomain>.mongolab.com:<dbport>/<dbdatabase>
    root: __dirname, // write files into this dir
    callback: function(err) {
      if (err) {
        console.error(err);
      } else {
        console.log("finish");
      }
    }
  });
});

module.exports = app;
