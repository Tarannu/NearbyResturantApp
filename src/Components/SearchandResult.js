import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import ResultSection from "./ResultSection";
import zomato from "../api/zomato";

const Home = () => {
  const [food,setFood]=useState("");
  const [location, setLocation] = useState("");
  const [results, setResults] = useState([]);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    
  };
  const handleFoodChange=(e)=>{
    setFood(e.target.value);
  }

  const searchFunc = async (loc,fd) => {
    console.log("inside search func")
    try {
      const city_response = await zomato.get(`/locations?query=${loc}`);
      const city_id = JSON.stringify(
        city_response.data.location_suggestions[0].entity_id
      );
      const food_response = await zomato.get(
        `/search?entity_id=${city_id}&entity_type=city&q=${fd}&sort=rating&order=asc`
      );
      console.log(
        "food response" + JSON.stringify(food_response.data.restaurants)
      );
      const items = food_response.data.restaurants; 
      console.log("ITEM IS :  ",items);
      if (items.length) {
        setResults(items);
      }
      console.log("ser result is " + results);
      console.log("set result names are " + results.name);
    } catch (err) {
      console.log(err);
    }
  
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    searchFunc(location,food);
  };
  
  return (
    <div style={{ padding: 50 }}>
      <SearchBar
        location={location}
        onLocationChange={handleLocationChange}
        onFoodChange={handleFoodChange}
        onTermSubmit={handleSubmit}
      />
      
      <ResultSection results={results} />
    </div>
  );
};

export default Home;
