import React from 'react'; 
import { Route, Switch } from 'react-router-dom';
import Home from '../src/containers/Home/Home';
import About from './components/About/About';
import Register from './components/Register/Register';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import './App.css';

const App = (props) => {
  return (
      <div className="App">
          <Nav/>
          <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/about" exact component={About}/>
              <Route path="/register" exact component={Register}/>
          </Switch>
          <Footer/>
      </div>
  );
}

export default App;
