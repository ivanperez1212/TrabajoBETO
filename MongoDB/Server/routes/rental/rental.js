const express = require("express");
const _ = require("underscore");
const Rental = require("../../models/rental");
const Customer = require("../../models/customer");
const app = express();
//Busqueda de rentas
app.get("/search", (req, res) => {
  Rental.find().exec((err, renDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        status: 400,
        msg: "No se mostro la renta",
        cont: err
      });
    }

    return res.status(200).json({
      ok: true,
      status: 200,
      msg: "Se obtuvieron las rentas correctamente",
      count: renDB.length,
      cont: renDB
    });
  });
});
//registro de renta
app.post("/rental", (req, res) => {
  let body = req.body;
  let rental = new Rental({
    Customer: body.Customer,
    Property: body.Property,
    Date: body.Date
  });

  rental.save((err, renDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        status: 400,
        msg: "Failed Rental Registration",
        cont: err
      });
    }

    return res.status(200).json({
      ok: true,
      status: 200,
      msg: "Rental successfully registered",
      cont: renDB
    });
  });
});

module.exports = app;
