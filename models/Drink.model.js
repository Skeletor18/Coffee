const mongoose = require("mongoose");

const drinkSchema = mongoose.Schema({
  name: String,
  price: Number,
  inStock: Boolean,
  caffeine: Boolean,
  volume: String,
  list: String,
});

const Drink = mongoose.model("Drink", drinkSchema);

module.exports = Drink;
