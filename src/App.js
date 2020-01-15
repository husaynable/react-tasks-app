import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Edit from './pages/Edit';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/edit/:id/:text/:status" component={Edit} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
