import React, { useState } from "react";
import FoodContainer from "./components/FoodContainer";
import Nav from './components/Nav';
import About from './components/About'
import AllFoods from "./components/AllFoods";
import './stylesheets/styles.css';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import FoodDetails from "./components/FoodDetails";


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/allFoods" component={AllFoods} />
          <Route path="/foodDetails" component={FoodDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

const Home = () => (
  <div className='home'>
    <h1>Home Page</h1>
  </div>
)

export default withRouter(App);