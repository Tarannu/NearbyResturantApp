import React,{useState,useEffect}  from 'react';
import './ResDetails.css';
import zomato from '../../api/zomato';
import MenuOrder from '../../Components/MenuOrder/MenuOrder'

const ResDetails = ({match}) => {
    const [results, setResults] = useState([]);
    const [resID,setResID] =useState([]);
  
  const detailsFunc = async () => {
    try {
      //location key is extracted from this api
      const res = await zomato.get(`/restaurant?res_id=${match.params.id}`);
      setResID(match.params.id);
      const details = res.data;
      console.log("Detail Is :  ", details);
      if (details) {
        setResults(details);
      }
      const menu = await zomato.get(`/dailymenu?res_id=$16931323`);
      const menuDetails = menu.data;
      console.log("Menu IS :  ", menuDetails);
      if (menuDetails) {
        setResults(menuDetails);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    detailsFunc();
  }, []);
//<p>Located at {results.location.address} </p>
  return (
    <div>
      <div className="res-div">
        <h2>{results.name}</h2>
        <div className="res-details">
        <p>They serve cuisines {results.cuisines}</p>
        <p >
          Open Through {results.timings}
        </p>
        
        <p>Contact {results.phone_numbers} </p>
        </div>
      </div>
      <MenuOrder resID={resID}/>
      
      
    </div>
  );
}

export default ResDetails;