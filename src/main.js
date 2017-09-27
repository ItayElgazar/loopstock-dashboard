import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage';
import ListingsPage from './components/ListingsPage';



const style = {
  marginLeft: '260px'
};

const Main = () => (
  <main style={style}>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/listings' component={ListingsPage} />
    </Switch>
  </main>
)

export default Main;