import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import ComponentHome from './Components/Home';
import Nav from './Route/Navbar';
import About from './Route/About';
import SignIn from './Route/SignUp';
import Footer from './Route/footer';



function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Route path="/" exact component={Home}/>
      <Route path="/About" component={About}/>
      <Route path="/SignIn" component={SignIn}/>
      <Footer/>
      
    </div>
    </Router>
  );
}
const Home=()=>{
  return(
    <div>
    <ComponentHome/>
    </div>
  )
}
export default App;
