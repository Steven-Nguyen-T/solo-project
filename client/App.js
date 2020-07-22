import React, { useState } from "react";
import FoodContainer from "./components/FoodContainer";
import AllFoods from "./components/AllFoods";
import './stylesheets/styles.css';


function App() {

  return (
    <div className="app">
      <FoodContainer />
      <AllFoods />
    </div>
  )
}

export default App;