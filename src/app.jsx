import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './components/home';
import Load from './components/load';
import Analysis from './components/analysis';


export default class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Navbar/>

          <Switch>
            <Route exact path="/" component={ Home }/>
            <Route path="/load" component={ Load }/>
            <Route path="/analysis" component={ Analysis }/>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}
