import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import CollegeForm from './CollegeForm.js'
import Login from './Login.js'
import Home from './Home.js'
import Main from './Main.js'
import Search from './Search';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
          <Route exact path = '/login' component = {Login}></Route>
          <Route exact path='/' component={Search}/>
          <Route exact path = '/form' component={CollegeForm} />
          <Route exact path = '/home' component = {Home} />
          <Route path = '/main' component = {Main} />
      </Switch>   
      </BrowserRouter>   
    </div>
  );
}

export default App;
