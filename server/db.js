require("dotenv").config();
const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGO_URI;

const connectToMongo = () => {
  mongoose
    .connect(uri)
    .then(() => console.log("connection success"))
    .catch((err) => console.log(err));
};

module.exports = connectToMongo;
