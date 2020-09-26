import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Header from './Header/Header'
import Home from './Home/Home';
import AboutUs from './AboutUs/AboutUs'

import '../styles/style.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/about-us" component={AboutUs} />
      </Switch>
    </div>
  );
}

export default App;
