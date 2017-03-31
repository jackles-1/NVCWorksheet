var mongoose = require("mongoose");

var feelingSchema = new mongoose.Schema({
   word: String,
   definition: String,
   category: String
});

module.exports = mongoose.model("Feeling", feelingSchema);
