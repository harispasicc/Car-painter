import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <Router>
        <ScrollToTop/>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/contac' component={Footer} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
