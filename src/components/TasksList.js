import React, { useState } from 'react';
import Task from './Task';

const TASKS = [
  {
    id: 1,
    username: 'Test1',
    email: 'test1@mail.com',
    text: 'Teeeeest',
    status: 10
  },
  {
    id: 2,
    username: 'Test2',
    email: 'test2@mail.ru',
    text: 'Teasdafasd asdf asdasd fasd asdf asd',
    status: 0
  },
  {
    id: 3,
    username: 'Test3',
    email: 'test3@mail.ru',
    text:
      'Tasdfasdk asdf asadf asdf asdf asdfasgj;lkj klj lkj jhasdkfhjk hadsfh',
    status: 0
  }
];

const TasksList = () => {
  const [tasks, setTasks] = useState(TASKS);

  return (
    <div style={{ margin: '20px 0' }}>
      {tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TasksList;
