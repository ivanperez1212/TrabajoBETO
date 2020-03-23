const express = require("express");
const _ = require("underscore");
const listingsAndReview = require("../../models/listingsAndReviews");
const mongoose = require("mongoose");
const app = express();
//Busqueda por tipo
app.get("/search/type/:params", (req, res) => {
  let params = req.params.params;
  listingsAndReview
    .find({
      property_type: params
    })
    .limit(100)
    .exec((err, proDB) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          status: 400,
          msg: "No se mostro la propirdad",
          cont: err
        });
      }

      return res.status(200).json({
        ok: true,
        status: 200,
        msg: "Se obtuvieron las propirdades correctamente",
        count: proDB.length,
        cont: proDB
      });
    });
});
//Busqueda por precio
app.get("/search/range/:min/:max", (req, res) => {
  let min = req.params.min;
  let max = req.params.max;
  listingsAndReview
    .find({ price: { $gte: Number(min), $lt: Number(max) } })
    .exec((err, proDB) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          status: 400,
          msg: "No se mostro la propiedad",
          cont: err
        });
      }

      return res.status(200).json({
        ok: true,
        status: 200,
        msg: "Se obtuvieron las propiedades correctamente",
        count: proDB.length,
        cont: proDB
      });
    });
});

module.exports = app;
