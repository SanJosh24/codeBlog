import React, { Component } from 'react';
import './App.css';
import BlogsList from './components/BlogsList';
import BlogsDetails from './components/BlogsDetails';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import Signup from './components/Signup';
import ClanList from './components/ClanList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        {/* <LandingPage /> */}
        <Switch>
          <Route exact path="/" component={LandingPage}/>      
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/blogs" component={BlogsList}/>
          <Route exact path="/blogs/:id" component={BlogsDetails}/>
          <Route exact path="/Clans" component={ClanList}/>
        </Switch>
      </div>
    );
  }
}

export default App;
