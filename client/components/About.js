import React from "react";

const About = () => {

  const navStyle = {
    color: 'lightblue'
  };

  return (
    <div>
      <h1 style={navStyle}>This app will be similar to a mini Yelp! You will be able to add your favorite foods that you have come across during your adventures. Whenever you come across something
      tasty, this app will allow you to store what you have just eaten into it. The user will be able to add the name of the dish, an image of it, the restaurant they ate at,
      they wil be able to rate it, the type of food it was, and where the restaurant is located. The user will also be able to update each panel to see if they had made a previous
mistake when creating a new fav food. The user will also be able to delete a panel if they find a similar food that tastes better.</h1>
    </div>
  )
}

export default About;
