import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, browserHistory} from 'react-router-dom';
import Home from './HomeComponent/home';
import Register from './RegisterComponent/register';
import Login from './LoginComponent/login';
function App() {
  return (
    <div>
<Router>
<div>

  <Switch>
<Route path = "/home" component = {Home} />
<Route path = "/register" component = {Register} />
<Route path = '/login' component = {Login} />
  </Switch>
</div>

</Router>

    </div>
  );
}

export default App;
