import React, { useState, useEffect } from "react";
import axios from "axios"
import '../stylesheets/styles.css'
const regeneratorRuntime = require("regenerator-runtime");

const AllFoods = () => {

  useEffect(() => {
    fetchFoods();
  }, []);

  const [datas, setDatas] = useState([]);

  const fetchFoods = async () => {
    const data = await axios.get('http://localhost:3000/foods');
    const datas = data
    console.log(datas)
    console.log(datas.data)
    console.log(datas.data[0]._id)
    setDatas(datas.data)
  }

  return (
    <div className="allFoods">
      {datas.map(data => (
        <ul>
          <li>{data.dishName}</li>
          <li>{data.image}</li>
          <li>{data.restaurant}</li>
          <li>{data.rating}</li>
          <li>{data.category}</li>
          <li>{data.location}</li>
        </ul>
        // <h5 key={data.dataid}>{data.dishName}{data.image}{data.restaurant}{data.rating}{data.category}{data.location}</h5>
      ))}
    </div>
  )
}

export default AllFoods;
