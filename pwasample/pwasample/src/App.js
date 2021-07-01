import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Users from './Users';

const NavBar = () => (
  <div className="navbar">
    <h3>PWA Example</h3>
    <Link to="/">Home</Link>
    <Link to="/users">Users</Link>
  </div>
);


class App extends Component {
  render() {
    return (
      <BrowserRouter>
         <NavBar />
        <div>
         <Switch>
          <Route path="/users" component={Users}/>
          <Route exact path="/" component={Home}/>
         </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;