import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import ComponentHome from './Components/SearchandResult';
import Nav from './Route/Navbar';
import About from './Route/About';
import SignIn from './Route/SignUp';
import Footer from './Route/footer';
import ResSelect from './Route/ResSelectPopOut';



function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Route path="/" exact component={Search}/>
      <Route path="/:id" component={ResSelect} />
      <Route path="/About" component={About}/>
      <Route path="/SignIn" component={SignIn}/>
      <Footer/>
      
    </div>
    </Router>
  );
}
const Search=()=>{
  return(
    <div>
    <ComponentHome/>
    </div>
  )
}
export default App;
