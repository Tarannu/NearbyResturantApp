import React, { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import Restaurant from "../../components/Restaurant/Restaurant";
import zomato from "../../api/zomato";
import Select from "react-select";

const Search = () => {
  const [food, setFood] = useState("");
  const [location, setLocation] = useState("");
  const [results, setResults] = useState([]);
  const options = [{ label: "Sort by review", value: "by review" }];
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
    try {
      //location key is extracted from this api
      const city_response = await zomato.get(`/locations?query=${loc}`);
      const city_id = JSON.stringify(
        city_response.data.location_suggestions[0].entity_id
      );

      //sort logic will be here
      var getURL = "";
      if (sort == "by review") {
        getURL = `/search?entity_id=${city_id}&entity_type=city&q=${fd}&sort=rating&order=desc`;
      } else getURL = `/search?entity_id=${city_id}&entity_type=city&q=${fd}`;
      //this api get the food type
      const food_response = await zomato.get(getURL);
      
      const items = food_response.data.restaurants;
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
  const handleClick = (e) => {};
  const handleSelect = (value) => {
    setSort(value);
    console.log(sort);
    searchFunc(food,location,sort);
  };
  let restaurants = null;
  if(results.length > 0){
    restaurants = results.map(restaurant => {
      return (
        <Restaurant
          key={restaurant.restaurant.id}
          restaurant={restaurant.restaurant}
       />
      )
    });

  }
 

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
       {restaurants}
    </div>
  );
};

export default Search;