// import { useState, useEffect } from "react";
// //import * as api from "./yelp";

// export function useBusinessSearch(term, location) {
//   const [businesses, setBusinesses] = useState([]);
//   const[amountResults, setAmountResults] = useState();
//   const [searchParams, setSearchParams] = useState({ term, location });

//   useEffect(() => {
//     setBusinesses([]);
//     const fetchData = async () => {
//       try {
//         const rawData = await api.get("/businesses/search", searchParams);
//         const resp = await rawData.json();
//         setBusinesses(resp.businesses);
//         setAmountResults(resp.total);
//       } catch (e) {
//         console.log(e);
//       } 
//     };
//     fetchData();

//   },[searchParams]);
//   return [businesses,amountResults,searchParams,setSearchParams];
// }
