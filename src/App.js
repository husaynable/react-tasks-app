import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import Home from './pages/Home';
import Login from './pages/Login';
import { connect } from 'react-redux';

function App({ isAdmin }) {
  return (
    <BrowserRouter>
      <Button style={{ position: 'absolute', right: '10px' }}>
        {isAdmin ? 'Выйти' : 'Войти'}
      </Button>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = state => {
  return {
    isAdmin: state.isAdmin
  };
};

export default connect(mapStateToProps)(App);
