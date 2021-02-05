import logo from './logo.svg';
import React from 'react'
import { Route } from 'react-router-dom'
import './App.css';
import Jeapordy from './Jeapordy/Jeapordy';
import Navigation from './ 
import Welcome from './components/welcome/Welcome';
import Clock from './components/clock/Clock'
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
     <Route 
     exact 
     path="/" 
     render={(props) => <Welcome {...props} name="Rev"/>}
     /> 
      <Route path="/clock" component={Clock} />
      <Route path="/contact" component={Contact} />
    </div>
  );
}

export default App;
