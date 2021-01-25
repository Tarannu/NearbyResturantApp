import React,{useState} from "react";
import zomato from "../api/zomato"

const ResSelectPopOut = () => {
const [results,setResults] =useState('')
 const detailsFunc=async()=> {
  
  try {
    //location key is extracted from this api
    const res =  await zomato.get(`/restaurant?res_id=16933935`);
    const details = res.data;
    console.log("Detail IS :  ", details);
    if (details) {
      setResults(details);
    }
  } catch (err) {
    console.log(err);
  }

};


  return (
    <div>
      <h1>This is Res Select</h1>
      <div>
      <button onClick={detailsFunc}>Place Order</button>
      </div>
    </div>
    
  );
};

export default ResSelectPopOut;
