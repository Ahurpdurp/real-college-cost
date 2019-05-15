import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import { connect } from 'react-redux'
import Login from './Login.js'
import Home from './Home.js'
import SearchRouter from './SearchRouter.js';
import './NavButtons.css'

function App() {
  return (
    <div className = 'big-container'>
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
