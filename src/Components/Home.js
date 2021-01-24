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

  const searchFunc = async (location) => {
    try {
      const city_response = await zomato.get(`/locations?query=${location}`);
      const city_id = JSON.stringify(
        city_response.data.location_suggestions[0].entity_id
      );
      const food_response = await zomato.get(
        `/search?entity_id=${city_id}&entity_type=city&q=${food}&sort=rating&order=asc`
      );
      console.log(
        "food response" + JSON.stringify(food_response.data.restaurants)
      );
      const items = food_response.data.restaurants; //.map(r=>{
      //return([r.restaurant.name, r.restaurant.id])
      //});
      const iD = items.map((r) => r.restaurant.id);
      console.log(iD);
      if (items) {
        setResults([
          {
            id: items.map((r) => r.restaurant.id),
            image: items.map((r) => r.restaurant.name),
            name: items.map((r) => r.restaurant.name),
            address: items.map((r) => r.restaurant.location.address),
            zip: items.map((r) => r.restaurant.location.zipcode),
            city: items.map((r) => r.restaurant.location.locality_verbose),
          },
        ]);
      }
      console.log("ser result is " + results);
      console.log("set result names are " + results.name);
    } catch (err) {
      console.log(err);
    }
    //
  };

  useEffect(() => {
    searchFunc(location,food);
    
  }, [location,food]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation("");
    setFood("");
  };
  
  return (
    <div style={{ padding: 50 }}>
      <SearchBar
        location={location}
        onLocationChange={handleLocationChange}
        onFoodChange={handleFoodChange}
        onTermSubmit={handleSubmit}
      />
      <div>
        {results.map((result) => (
          <ol className="resturaunt-list-parent">
            {result.name.map((n) => (
              <li className="resturaunt-name-list">
                {" "}
                Name of the Resturant is {n}
              </li>
            ))}
          </ol>
        ))}
      </div>
      <ResultSection />
    </div>
  );
};


export default Home;
