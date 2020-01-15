import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import { loadTasks } from './actions';
import { connect } from 'react-redux';

function App({ onLoadTasks }) {
  useEffect(() => {
    onLoadTasks();
  }, [onLoadTasks]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onLoadTasks: () => dispatch(loadTasks())
  };
};

export default connect(null, mapDispatchToProps)(App);
