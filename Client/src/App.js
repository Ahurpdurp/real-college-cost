import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import { connect } from 'react-redux'
import CollegeForm from './CollegeForm.js'
import Login from './Login.js'
import Home from './Home.js'
import Main from './Main.js'
import TotalCost from './TotalCost.js';
import SearchRouter from './SearchRouter.js';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
          <Route exact path = '/login' component = {Login}></Route>
          <Route exact path='/' component={Home}/>
          <Route path ='/main' component={SearchRouter}/>
      </Switch>   
      </BrowserRouter>   
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      total: state.total
  }
}

export default connect(mapStateToProps)(App)
