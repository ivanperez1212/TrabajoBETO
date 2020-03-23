/* jshint esversion: 8 */

//PUERTO
process.env.PORT = process.env.PORT || 3000;

//entorno
process.env.NODE_ENV = process.env.NODE_ENV || "dev";

//conexion a la db
let urlDB;

if (process.env.NODE_ENV === "dev") {
    urlDB = "mongodb://localhost:27017/sample_airbnb";
} else {
    urlDB = "mongodb+srv://admin:admin@cluster0-aokp5.mongodb.net/sample_airbnb";
}

process.env.URLDB = urlDB;