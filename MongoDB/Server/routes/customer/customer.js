const express = require("express");
const _ = require("underscore");
const Customer = require("../../models/customer");
const mongoose = require("mongoose");
const app = express();
const backup = require("mongodb-backup");
app.get("/search/:params", (req, res) => {
    let params = req.params.params;
    let id;
    if (isNaN(params)) {
        id = 0;
    } else {
        id = params;
    }
    Customer.find({
        $or: [{ _id: id }, { FirstName: params }, { City: params }]
    }).exec((err, cusDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                status: 400,
                msg: "No se mostro los clientes",
                cont: err
            });
        }

        return res.status(200).json({
            ok: true,
            status: 200,
            msg: "Se obtuvieron los clientes correctamente",
            count: cusDB.length,
            cont: cusDB
        });
    });
});
app.get("/search", (req, res) => {

    Customer.find({}).exec((err, cusDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                status: 400,
                msg: "No se mostro los clientes",
                cont: err
            });
        }

        return res.status(200).json({
            ok: true,
            status: 200,
            msg: "Se obtuvieron los clientes correctamente",
            count: cusDB.length,
            cont: cusDB
        });
    });
});
app.post("/registration", (req, res) => {
    let body = req.body;
    let Id = 0;
    Customer.find()
        .sort({ _id: -1 })
        .limit(1)
        .exec((err, cusDB) => {
            if (cusDB.length == 0) {
                Id = 1;
            } else {
                Id = cusDB[0]._id + 1;
            }
            let customer = new Customer({
                _id: 2,
                Address: body.Address,
                City: body.City,
                Country: body.Country,
                District: body.District,
                FirstName: body.FirstName,
                LastName: body.LastName
            });

            customer.save((err, cusDB) => {
                if (err) {
                    return res.status(400).json({
                        ok: false,
                        status: 400,
                        msg: "Failed Customer Registration",
                        cont: err
                    });
                }

                return res.status(200).json({
                    ok: true,
                    status: 200,
                    msg: "Customer successfully registered",
                    cont: cusDB
                });
            });
        });
});

app.put("/actualizar/:id", (req, res) => {
    let id = req.params.id;
    let body = _.pick(req.body, [
        "Address",
        "City",
        "Country",
        "District",
        "FirstName",
        "LastName"
    ]);

    Customer.findByIdAndUpdate(
        id,
        body, { new: true, runValidators: true, context: "query" },
        (err, cusDB) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    status: 400,
                    msg: "No se actualizo el cliente",
                    cont: err
                });
            }
            return res.status(200).json({
                ok: true,
                status: 200,
                msg: "Se actualizo correctamente el cliente",
                cont: cusDB
            });
        }
    );
});

app.delete("/eliminar/:id", (req, res) => {
    let id = req.params.id;

    Customer.findByIdAndUpdate(
        id, { Status: false }, { new: true, runValidators: true, context: "query" },
        (err, cusDB) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    status: 400,
                    msg: "No se elimino el cliente",
                    cont: err
                });
            }
            return res.status(200).json({
                ok: true,
                status: 200,
                msg: "Se elimino correctamente",
                cont: cusDB
            });
        }
    );
});

app.delete("/eliminar/many/:params", (req, res) => {
    let params = req.params.params;
    let id;
    if (isNaN(params)) {
        id = 0;
    } else {
        id = params;
    }
    Customer.deleteMany({ $or: [{ FirstName: params }, { _id: id }] },
        (err, cusDB) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    status: 400,
                    msg: "No se elimino el clinete",
                    cont: err
                });
            }
            return res.status(200).json({
                ok: true,
                status: 200,
                msg: "Se elimino correctamente",
                cont: cusDB
            });
        }
    );
});

module.exports = app;