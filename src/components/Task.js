import React from 'react';
import { Card } from 'react-bootstrap';

import './Task.css';
import { Link } from 'react-router-dom';
import { getEditedTaskIds } from '../utils';

const Task = ({ task, isAdmin }) => {
  const isEditedByAdmin = () => {
    console.log(getEditedTaskIds());
    console.log(task.id);
    return getEditedTaskIds().includes(task.id);
  };

  return (
    <Card className="Task">
      <Card.Header className="Task__header">
        {task.username} <code>{task.email}</code>
        <span style={{ flex: '1 1 auto' }}></span>
        {isAdmin ? (
          <Link to={`/edit/${task.id}/${task.text}/${task.status}`}>
            Редактировать
          </Link>
        ) : null}
      </Card.Header>
      <Card.Body>
        <Card.Text>{task.text}</Card.Text>
        <div className="Task__status">
          {task.status === 0 ? 'не выполнено' : 'выполнено'}
          {isEditedByAdmin() ? (
            <span>
              <br />
              редактировано администратором
            </span>
          ) : null}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Task;
