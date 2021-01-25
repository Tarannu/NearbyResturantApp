import React,{useState,useEffect} from "react";
import zomato from "../api/zomato"

const ResSelectPopOut = ({match}) => {
const [results,setResults] =useState('')
 const detailsFunc=async()=> {
  
  try {
    //location key is extracted from this api
    const res =  await zomato.get(`/restaurant?res_id=${match.params.id}`);
    const details = res.data;
    console.log("Detail IS :  ", details);
    if (details) {
      setResults(details);
    }
  } catch (err) {
    console.log(err);
  }

};
useEffect(() => {
  detailsFunc();
  console.log(match);
}, [])

  return (
    <div>
      <h1>This is Res Select</h1>
      <div>
      <button>Place Order</button>
      </div>
    </div>
    
  );
};

export default ResSelectPopOut;
