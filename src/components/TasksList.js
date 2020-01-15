import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';

const TasksList = ({ tasks, isAdmin }) => {
  return (
    <div style={{ margin: '20px 0' }}>
      {tasks.map(task => (
        <Task key={task.id} isAdmin={isAdmin} task={task} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
    isAdmin: state.isAdmin
  };
};

export default connect(mapStateToProps)(TasksList);
