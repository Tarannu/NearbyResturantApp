import React, { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import Restaurant from "../../components/Restaurant/Restaurant";
import zomato from "../../api/zomato";
import ResDetails from "../../components/ResDetails/ResDetails";
import './Search.css';

const Search = (props) => {
  const [food, setFood] = useState("");
  const [location, setLocation] = useState("");
  const [results, setResults] = useState([]);
  const options = [{ label: "---None---", value: "" }, { label: "Sort by review", value: "by review" }];
  const [sortBy, setSortBy] = useState("");

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  const handleFoodChange = (e) => {
    setFood(e.target.value);
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
      if (sortBy == "by review") {
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
    searchFunc(location, food, sortBy);
  }, [location, food, sortBy]);
  
  const handleSubmit = (e) => {
    console.log("It will take max 15 minutes to load otherwise please refresh");
    e.preventDefault();
    searchFunc(location, food, sortBy);
  };
  const handleSearchButton = (e) => {};

  let restaurants = null;
  if(results.length > 0){
    restaurants = results.map(restaurant => {
  
      return (
        <Restaurant
          key={restaurant.restaurant.id}
          id={restaurant.restaurant.id}
          restaurantName={restaurant.restaurant.name}
          restaurantAddress={restaurant.restaurant.location.address}
          thumbnail={restaurant.restaurant.thumb}
          rating={restaurant.restaurant.user_rating}
       />
      )
    });

  }

  const handleSort = (value) => {
    setSortBy(value);
    console.log(sortBy);
    searchFunc(food,location,sortBy);
  };
 
  return (
    <div style={{ padding: 50 }}>
      <SearchBar
        location={location}
        onLocationChange={handleLocationChange}
        onFoodChange={handleFoodChange}
        handleSearchButton={handleSearchButton}
      />
      <div>
        <select 
          className="SortBy"
          onChange={handleSort}
        >
          {options.map(option =>{
            return <option {...option}></option>
          })}
        </select>
      </div>
       {results.length > 0 ? <p className="SearchResults">Search Results</p> : null}
       {restaurants}
       {/* {results.length > 0 ? <Restaurant results={results} onSortChanged={handleSort}/>: null} */}
    </div>
  );
};

export default Search;