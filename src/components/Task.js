import React from 'react';
import { Card } from 'react-bootstrap';

import './Task.css';

const Task = ({ task }) => {
  return (
    <Card className="Task">
      <Card.Header>
        {task.username} <code>{task.email}</code>
      </Card.Header>
      <Card.Body>
        <Card.Text>{task.text}</Card.Text>
        <div className="Task__status">
          {task.status === 0 ? 'не выполнено' : 'выполнено'}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Task;
