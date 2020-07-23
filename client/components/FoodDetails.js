import React, { useState } from "react";
import axios from 'axios';

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
        <button type="submit" onClick={event => handleSubmit(event)}>Submit</button>
      </form>
    </div>
  )
}

export default FoodDetails;