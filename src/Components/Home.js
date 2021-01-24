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
      const food_response = await zomato.get(
        `/search?entity_id=${city_id}&entity_type=city&q=burger&sort=rating&order=asc`
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
        setResults([{
          id: items.map((r) => r.restaurant.id),
          image:items.map((r) => r.restaurant.name),
          name: items.map((r) => r.restaurant.name),
          address:items.map((r) => r.restaurant.location.address),
          zip:items.map((r) => r.restaurant.location.zipcode),
          city:items.map((r) => r.restaurant.location.locality_verbose),

        }]);
      }
      console.log("ser result is " + results);
      console.log("set result names are " + results.name);
    } catch (err) {
      console.log(err);
    }
    //
  };

  useEffect(() => {
    searchFunc(term);
  }, [term]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTerm("");
  };
  //const ListItems=results.map((result)=><li key={result.id}>{result.name}</li>)
  return (
    <div style={{ padding: 50 }}>
      <SearchBar
        term={term}
        onTermChange={handleChange}
        onTermSubmit={handleSubmit}
      />
      <div>
        {results.map((result)=>

          <ol className='resturaunt-list-parent'>
            
            {result.name.map((n) => (
              <li className='resturaunt-name-list'> Name of the Resturant is {n}</li>
              
            ))

          }
            

          </ol>
        )}
      </div>
      <ResultSection />
    </div>
  );
};
// <ul>{
//   results.map(result=>(
//     <li key={result}>{result}</li>
//   ))
// }
// </ul>

export default Home;