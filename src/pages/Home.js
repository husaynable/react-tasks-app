import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import TasksList from '../components/TasksList';
import Sort from '../components/Sort';
import NewTask from '../components/NewTask';
import Paginator from '../components/Paginator';
import { logout } from '../actions';

const Home = ({ isAdmin, countOfPages, onLogout }) => {
  return (
    <div className="container">
      {isAdmin ? (
        <Button
          style={{ position: 'absolute', right: '10px' }}
          onClick={onLogout}
        >
          Выйти
        </Button>
      ) : (
        <Link to="/login">
          <Button style={{ position: 'absolute', right: '10px' }}>Войти</Button>
        </Link>
      )}
      <NewTask />
      <Sort />
      <TasksList />
      {countOfPages > 0 ? <Paginator /> : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAdmin: state.isAdmin,
    countOfPages: state.countOfPages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
