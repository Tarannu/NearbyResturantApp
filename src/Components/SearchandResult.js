import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import ResultSection from "./ResultSection";
import ResSelect from "../Route/ResSelectPopOut";
import zomato from "../api/zomato";
import {BrowserRouter as Router,Route} from 'react-router-dom';

const Home = () => {
  const [food, setFood] = useState("");
  const [location, setLocation] = useState("");
  const [results, setResults] = useState([]);
  const [sort, setSort] = useState("");
  
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  const handleFoodChange = (e) => {
    setFood(e.target.value);
  };
  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const searchFunc = async (loc, fd, sort) => {
    console.log("inside search");
    try {
      //location key is extracted from this api
      const city_response = await zomato.get(`/locations?query=${loc}`);
      const city_id = JSON.stringify(
        city_response.data.location_suggestions[0].entity_id
      );

      //sort logic will be here
      
      //this api get the food type
      const food_response = await zomato.get(
        `/search?entity_id=${city_id}&entity_type=city&q=${fd}&sort=rating&order=desc`
      );

      const items = food_response.data.restaurants;
      console.log("ITEM IS :  ", items);
      if (items.length) {
        setResults(items);
      }
    } catch (err) {
      console.log(err);
    }
    //
  };

  useEffect(() => {
    searchFunc(location,food);
    
  }, [location,food]);

  const handleSubmit = (e) => {
    console.log("It will take max 15 minutes to load otherwise please refresh")
    e.preventDefault();
    searchFunc(location, food);
  };
  const handleClick=(e)=>{

  }

  return (
    <div style={{ padding: 50 }}>
      <SearchBar
        location={location}
        onLocationChange={handleLocationChange}
        onFoodChange={handleFoodChange}
        onTermSubmit={handleSubmit}
      />
      <div>
        <select className="selection-button" name="sort">
          <option value="" disabled selected>
            Sort by
          </option>
          <option value="by review">Sort by Review</option>
        </select>
      </div>
      
      <ResultSection results={results} />
      
    </div>
  );
};

export default Home;
