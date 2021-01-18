import React,{useState} from "react";
import SearchBar from './SearchBar';
import MiddleSection from './MiddleSection';

const Home = () => {
const [term,setTerm]=useState('');
const handleChange=(e)=>{
  setTerm(e.target.value);
}
const handleSubmit=(e)=>{
  e.preventDefault();
  console.log("Entered the handlesubmit function with input ");
}


  return (
    <div style={{ padding: 50 }}>
    <SearchBar term={term}  onTermChange={handleChange} onTermSubmit={handleSubmit} />
    <p>We have found {term} results</p>
    <MiddleSection/>

    </div>
  );
};

export default Home;
