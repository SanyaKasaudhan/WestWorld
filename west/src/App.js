import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './Home'
import Navbar from './NavBar'
function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/" component={Home} />
      <Route path="/" component={Home} />
      <Route path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
    </>
  );
}

export default App;
