import React from 'react'; 
import { Route, Switch } from 'react-router-dom';
import Home from '../src/containers/Home/Home';
import About from './components/About/About';
import Register from './components/Register/Register';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Search from '../src/containers/Search/Search';
import './App.css';

const App = (props) => {
  return (
      <div className="App">
          <Nav/>
          <Switch>
              <Route path="/about" component={About}/>
              <Route path="/register" component={Register}/>
              <Route path="/search-and-result" component={Search}/>
              <Route path="/" component={Home}/>
          </Switch>
          <Footer/>
      </div>
  );
}

export default App;
