import React, { Component } from 'react';
import './App.css';
import Login from './login'
import Home from './home'
import Registro from './registro'
import { Route, Router, Switch } from 'react-router'
import {PrivateRoute} from './private'

class App extends Component {
 
  render() {
    return (
      <Router history={this.props.history}>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <PrivateRoute path="/home" component={Home}></PrivateRoute>
          <Route path="/registro" component={Registro}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
