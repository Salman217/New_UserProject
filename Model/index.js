const dbConfig = require("../Config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./Schema.js")(mongoose);

module.exports = db;
