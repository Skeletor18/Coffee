const Drink = require("../models/Drink.model.js");

module.exports.drinksController = {
  getDrinks: async (req, res) => {
    try {
      const drinksAll = await Drink.find({}, {name:1, price:1});
      res.json(drinksAll);
    } catch (err) {
      res.json(err);
    }
  },
  getDrinksScock: async (req, res) => {
    try {
      const drinksInStock = await Drink.find({ inStock: true });
      res.json(drinksInStock);
    } catch (err) {
      res.json(err);
    }
  },
  getDrinksId: async (req, res) => {
    try {
      const drinksId = await Drink.findById(req.params.id);
      res.json(drinksId);
    } catch (err) {
      res.json(err);
    }
  },
  postDrinks: async (req, res) => {
    const { name, price, inStock, caffeine, volume, list } = req.body;
    try {
      await Drink.create({
        name,
        price,
        inStock,
        caffeine,
        volume,
        list,
      });
      res.json("Напиток добавлен");
    } catch (err) {
      res.json(err);
    }
  },
  deleteDrinks: async (req, res) => {
    try {
      await Drink.findByIdAndRemove(req.params.id);
      res.json("Напиток удален");
    } catch (err) {
      res.json(err);
    }
  },
  patchDrinks: async (req, res) => {
    const { name, price, inStock, caffeine, volume, list } = req.body;
    try {
      await Drink.findByIdAndUpdate(req.params.id, {
        name,
        price,
        inStock,
        caffeine,
        volume,
        list,
      });
      res.json("Напиток изменен");
    } catch (err) {
      res.json(err);
    }
  },
};
