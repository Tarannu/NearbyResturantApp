import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import MiddleSection from "./MiddleSection";
import axios from "axios";
import yelp from "../api/yelp";

const Home = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  // const searchApi=async()=>{
  //   try{
  //   const response=await yelp.get('/search',{
  //     params:{
  //       limit:50,
  //       term,
  //       location:'san jose'
  //     }
  //   });
  //   setResults(response.data.businesses);

  // } catch(err){
  //   console.log(err)
  // }

  // }
  
  const options = {
    method: 'GET',
    url: 'https://developers.zomato.com/api/v2.1/locations?query=Miami',
    headers: {
      'user-key':'70603f3ae4dd3141c5a0afb0dd61ad32',

    }
  };
  
  // axios.request(options).then(function (response) {
  //   console.log(response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });
  
  const searchApi = async () => {
    const response = await axios.request(options);
    console.log("web response "+JSON.stringify(response.data.location_suggestions[0].title));
    setResults(response.data.location_suggestions);
  };
  useEffect(() => {
    searchApi();
  }, []);
  const handleChange = (e) => {
    setTerm(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    searchApi();
    console.log("Entered the handlesubmit function with input ");
  };

  return (
    <div style={{ padding: 50 }}>
      <SearchBar
        term={term}
        onTermChange={handleChange}
        onTermSubmit={handleSubmit}
      />
      <p>We have found {results.length} results</p>

      <MiddleSection />
    </div>
  );
};

export default Home;
