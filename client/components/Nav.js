import React from "react";
import '../stylesheets/styles.css'
import { Link, withRouter } from 'react-router-dom'

const Nav = () => {
  const navStyle = {
    color: 'white'
  };

  return (
    <nav>
      <ul className="nav-links">
        <Link style={navStyle} to='/'>
          <li>Home</li>
        </Link>
        <Link style={navStyle} to='/foodDetails'>
          <li>Enter new favorite food!</li>
        </Link>
        <Link style={navStyle} to='/about'>
          <li>About</li>
        </Link>
        <Link style={navStyle} to='/allFoods'>
          <li>AllFoods</li>
        </Link>
      </ul>
    </nav>
  )
}

export default withRouter(Nav);
