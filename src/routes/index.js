import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import LoginPage from '../components/login/loginPage';
import SearchPlanet from '../components/searchPlanet/searchPlanet';


export default () => (
  <Router history={hashHistory}>
    <Route path='/' component={LoginPage}/> 
    <Route path='/login' component={LoginPage}/> 
    <Route path='/search' component={SearchPlanet} onEnter={requireAuth}/> 
  </Router>

);

function requireAuth(nextState, replaceState) {
  if (!sessionStorage.getItem('loginObj')){
    console.log('replaceState: ', replaceState, nextState)
    replaceState({ nextPathname: nextState.location.pathname }, '/login')
  }
      
}