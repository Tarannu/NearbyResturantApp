import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import ResultSection from "./ResultSection";
import zomato from "../api/zomato";

const Home = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const searchFunc = async (term) => {
    try {
      const city_response = await zomato.get(`/locations?query=${term}`);
      const city_id = JSON.stringify(
        city_response.data.location_suggestions[0].entity_id
      );
      // console.log(
      //   "web response " +
      //     JSON.stringify(city_response.data.location_suggestions[0])
      // );
      const food_response = await zomato.get(
        `/search?entity_id=${city_id}&entity_type=city&q=burger&sort=rating&order=asc`
      );
      console.log("food response" + JSON.stringify(food_response.data.restaurants));
      const items=food_response.data.restaurants.map(r=> {
        return([r.restaurant.name, r.restaurant.id])
        });
      if(items){
      setResults(items);
      console.log(results);
      }
      //console.log("result item is" +JSON.stringify(results));
      console.log(results);
    } catch (err) {
      console.log(err);
    }
    // 
  };

  useEffect(()=>{
    searchFunc(term);
  },[term]);
  const handleSubmit=(e)=>{
    e.preventDefault();
  }
  

  return (
    <div style={{ padding: 50 }}>
      <SearchBar
        term={term}
        onTermChange={handleChange}
        onTermSubmit={handleSubmit}
      />
      <p>The resturant name is {results} at {term}</p>

      <ResultSection />
    </div>
  );
};

export default Home;
