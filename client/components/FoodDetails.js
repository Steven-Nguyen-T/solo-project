import React, { useState } from "react";
import axios from 'axios';

const FoodDetails = () => {

  // const { favFood, setFavFood } = useState({
  //   dishName: "",
  //   image: "",
  //   restaurant: "",
  //   rating: "",
  //   category: "",
  //   location: ""
  // });

  // const { dishName, image, restaurant, rating, category, location } = favFood;

  // const onChange = e => setFavFood({ ...favFood, [e.target.name]: e.target.value });

  // const onSubmit = async e => {
  //   const newFood = {
  //     dishName,
  //     image,
  //     restaurant,
  //     rating,
  //     category,
  //     location
  //   }
  //   try {
  //     const body = JSON.stringify(newFood);
  //     const res = await axios.post('https://localhost:8080/foods', body);
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  return (
    <div className="foodDetails">
      <form method="POST" action="http://localhost:8080/foods" onSubmit={e => onSubmit(e)}>
        <input className="form" type={Text} placeholder="Enter the name of the dish" onChange={e => onChange(e)}></input>
        <input className="form" type={Text} placeholder="Add an image" onChange={e => onChange(e)}></input>
        <input className="form" type={Text} placeholder="Enter a restaurant name" onChange={e => onChange(e)}></input>
        <input className="form" type={Text} placeholder="Rate the food" onChange={e => onChange(e)}></input>
        <input className="form" type={Text} placeholder="Type of food" onChange={e => onChange(e)}></input>
        <input className="form" type={Text} placeholder="Location of restaurant" onChange={e => onChange(e)}></input>
        <input type="submit" value="submit"></input>
      </form>
    </div>
  )
}

export default FoodDetails;