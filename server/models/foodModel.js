const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodSchema = new Schema({
  dishName: { type: String, required: true },
  image: { type: String, required: true },
  restaurant: { type: String, required: true },
  rating: { type: Number, required: true },
  category: { type: String, required: true },
  location: { type: String, required: true }
})

module.exports = mongoose.model('Food', FoodSchema)