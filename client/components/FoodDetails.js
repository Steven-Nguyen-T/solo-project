import React, { useState } from "react";
import axios from 'axios';
import { Button } from '@material-ui/core';

const FoodDetails = () => {

  const [newFood, setFavFood] = useState({
    dishName: "",
    image: "",
    restaurant: "",
    rating: "",
    category: "",
    location: ""
  });

  const { dishName, image, restaurant, rating, category, location } = newFood;

  const handleChange = event => {
    console.log(event.target.value)
    console.log(event.target.name)
    setFavFood({ ...newFood, [event.target.name]: event.target.value }); //.name is built in
  }

  const handleSubmit = event => {
    event.preventDefault();

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const newFood = JSON.stringify({
      dishName,
      image,
      restaurant,
      rating,
      category,
      location
    })
    // const newFood = {
    //   dishName,
    //   image,
    //   restaurant,
    //   rating,
    //   category,
    //   location
    // }

    axios.post('http://localhost:3000/foods', newFood, config)
      .then(res => {
        console.log(res);
        console.log(res.data)
        window.location = '/allFoods'
        // res.redirect('/allFoods')
      })
      .catch(error => console.log(error))
  }

  return (
    <div className="foodDetails">
      <form className="form">
        <input type='text' name="dishName" placeholder="Enter the name of the dish" onChange={event => handleChange(event)}></input>
        <input type='text' name="image" placeholder="Add an image" onChange={event => handleChange(event)}></input>
        <input type='text' name="restaurant" placeholder="Enter a restaurant name" onChange={event => handleChange(event)}></input>
        <input type='text' name="rating" placeholder="Rate the food" onChange={event => handleChange(event)}></input>
        <input type='text' name="category" placeholder="Type of food" onChange={event => handleChange(event)}></input>
        <input type='text' name="location" placeholder="Location of restaurant" onChange={event => handleChange(event)}></input>
        <Button type="submit" onClick={event => handleSubmit(event)}>Submit</Button>
      </form>
      <img className="img" src="data:image/png;base64,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" />
    </div>
  )
}

export default FoodDetails;