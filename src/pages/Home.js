import React from 'react';
import TasksList from '../components/TasksList';
import Sort from '../components/Sort';
import NewTask from '../components/NewTask';

const Home = () => {
  return (
    <div className="container">
      <NewTask />
      <Sort />
      <TasksList />
    </div>
  );
};

export default Home;
