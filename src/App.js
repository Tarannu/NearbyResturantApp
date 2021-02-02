import React from 'react'; 
import { Route, Switch } from 'react-router-dom';
import Home from '../src/containers/Home/Home';
import About from './components/About/About';
import Register from './components/Register/Register';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Search from '../src/containers/Search/Search';
import ResDetails from '../src/components/ResDetails/ResDetails';
import RestaurantMenu from './containers/Menu/RestaurantMenu';
import './App.css';

const App = (props) => {
  return (
      <div className="App">
          <Nav/>
          <Switch>
              <Route path="/about" component={About}/>
              <Route path="/register" component={Register}/>
              <Route path="/search-and-result" component={Search}/>
              <Route path="/:id/res-details" component={ResDetails}/>
              <Route path="/:id/menu-order" component={RestaurantMenu}/>
              <Route path="/" component={Home}/>
          </Switch>
          <Footer/>
      </div>
  );
}

export default App;
