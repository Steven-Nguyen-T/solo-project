const Food = require('../models/foodModel');
const path = require('path')
const foodController = {};

/*
This app will be similar to a mini Yelp! You will be able to add your favorite foods that you have come across during your adventures. Whenever you come across something
tasty, this app will allow you to store what you have just eaten into it. The user will be able to add the name of the dish, an image of it, the restaurant they ate at,
they wil be able to rate it, the type of food it was, and where the restaurant is located. The user will also be able to update each panel to see if they had made a previous
mistake when creating a new fav food. The user will also be able to delete a panel if they find a similar food that tastes better.
*/

foodController.getFood = (req, res, next) => {
  // This controller will get the food
  Food.find({}, (err, foods) => {
    // if a database error occurs, call next with the error message passed in
    // for the express global error handler to catch
    if (err) return next('Error in userController.getAllUsers: ' + JSON.stringify(err));

    // store retrieved users into res.locals and move on to next middleware
    res.locals.foods = foods;
    return next();
  });
}

foodController.getOneFood = (req, res, next) => {
  // console.log(req.params.id)
  Food.findOne({ _id: req.params.id })
    .then((err, food) => {
      if (err) {
        res.send(err)
        return next();
      } else {
        console.log(food);
        res.send(food)
        return next();
      }
    })
}

foodController.createFood = (req, res, next) => {
  // This controller will create the food
  const { dishName, image, restaurant, rating, category, location } = req.body;
  Food.create({ dishName, image, restaurant, rating, category, location })
    .then(data => {
      console.log(data)
      res.locals.foods = data
      return next();
    })
    .catch(err => {
      console.log(err)
      return next();
    })
}

foodController.updateFood = (req, res, next) => {
  // This controller will allow the user to edit the food
  Food.findOneAndUpdate({
    _id: req.params.id
  }, {
    $set: {
      dishName: req.body.dishName,
      image: req.body.image,
      restaurant: req.body.restaurant,
      rating: req.body.rating,
      category: req.body.category,
      location: req.body.location
    }
  },
    { upsert: true },
    (err, newFood) => {
      if (err) {
        console.log("error in updateFood")
      } else {
        console.log(newFood);
        res.send(newFood);
      }
    })
}

foodController.deleteFood = (req, res, next) => {
  // This controller will allow the user to delete the food
  Food.findOneAndRemove({ _id: req.params.id })
    .then((err, deletedFood) => {
      if (err) return res.status(500).send(err)
      const response = {
        message: "Food successfully deleted",
      }
      return res.status(200).send(response)
    })
}


module.exports = foodController;