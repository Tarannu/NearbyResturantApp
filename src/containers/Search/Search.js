import React, { useState, useEffect } from "react";
import SearchBar from "../../Components/SearchBar/SearchBar";
import ResultSection from "../../Components/Restaurant/Restaurant";
import zomato from "../../api/zomato";
import Select from "react-select";

const Home = () => {
  const [food, setFood] = useState("");
  const [location, setLocation] = useState("");
  const [results, setResults] = useState([]);
  const options = [{ label: "sort by review", value: "by review" }];
  const [sort, setSort] = useState("");

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  const handleFoodChange = (e) => {
    setFood(e.target.value);
  };

  const searchFunc = async (loc, fd, sort) => {
    console.log("inside search");
    try {
      //location key is extracted from this api
      const city_response = await zomato.get(`/locations?query=${loc}`);
      const city_id = JSON.stringify(
        city_response.data.location_suggestions[0].entity_id
      );

      //sort logic is here
      var getURL = "";
      if (sort.value === "by review") {
        console.log("Inside if state sort === by review")
        getURL = `/search?entity_id=${city_id}&entity_type=city&q=${fd}&sort=rating&order=desc`;
      } else { getURL = `/search?entity_id=${city_id}&entity_type=city&q=${fd}`;}
      
      //this api get the food type
      const food_response = await zomato.get(getURL);

      const items = food_response.data.restaurants;
      console.log("ITEM IS :  ", items);
      if (items.length) {
        setResults(items);
      }
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    searchFunc(location, food, sort);
  }, [location, food,sort]);
  
  const handleSubmit = (e) => {
    console.log("It will take max 15 minutes to load otherwise please refresh");
    e.preventDefault();
    searchFunc(location, food,sort);
  };
  
  const handleSelect = (value) => {
    setSort(value);
    console.log(sort.value);
    console.log("first time double click to sort");
  
  };

  return (
    <div style={{ padding: 50 }}>
      <SearchBar
        location={location}
        onLocationChange={handleLocationChange}
        onFoodChange={handleFoodChange}
        onTermSubmit={handleSubmit}
      />
      <div style={{ fontSize: 14 }}>
        <Select options={options} onChange={handleSelect} />
      </div>

      <ResultSection results={results} onSortChanged={handleSelect} />
    </div>
  );
};

export default Home;
