import React from 'react'; 
import { Route, Switch } from 'react-router-dom';
import Home from '../src/containers/Home/Home';
import About from './Components/About/About';
import Register from './Components/Register/Register';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import Search from '../src/containers/Search/Search';
import ResDetails from '../src/Components/ResDetails/ResDetails';
import './App.css';

const App = (props) => {
  return (
      <div className="App">
          <Nav/>
          <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/register" component={Register}/>
              <Route path="/search-and-result" exact component={Search}/>
              <Route path="/:id" component={ResDetails}/>
             
          </Switch>
          <Footer/>
      </div>
  );
}

export default App;
