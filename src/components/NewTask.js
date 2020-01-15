import React, { useState } from 'react';
import { Form, Button, Alert, Card } from 'react-bootstrap';
import { connect } from 'react-redux';

import * as actions from '../actions';
import './NewTask.css';

const NewTask = ({ onAddTask }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  const [isSuccess, setIsSuccess] = useState(false);
  const [hasErrors, setHasErrors] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});

  const sendHandler = () => {
    const form = new FormData();
    form.append('username', username);
    form.append('email', email);
    form.append('text', text);

    onAddTask(form, setIsSuccess.bind(null, true), errorHandler);
  };

  const errorHandler = errorMessages => {
    setHasErrors(true);
    setErrorMessages(errorMessages);
  };

  const clearAllFlags = () => {
    setIsSuccess(false);
    setHasErrors(false);
  };

  return (
    <Card className="NewTask">
      <Card.Body>
        <Card.Title>Новая задача</Card.Title>

        <Form onChange={clearAllFlags}>
          <Form.Group controlId="username">
            <Form.Label>Имя пользователя</Form.Label>
            <Form.Control
              required
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="text">
            <Form.Label>Текст</Form.Label>
            <Form.Control
              as="textarea"
              value={text}
              onChange={e => setText(e.target.value)}
            ></Form.Control>
          </Form.Group>

          {isSuccess ? (
            <Alert variant="success">Успешно добавлено!</Alert>
          ) : null}
          {hasErrors ? (
            <Alert variant="danger">
              {Object.entries(errorMessages).map(errorMsg => (
                <div key={errorMsg[0]}>
                  <strong>{errorMsg[0]}: </strong>
                  {errorMsg[1]}
                </div>
              ))}
            </Alert>
          ) : null}
          <Button type="button" onClick={sendHandler}>
            Добавить
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onAddTask: (form, successHandler, errorHandler) =>
      dispatch(actions.addTask(form, successHandler, errorHandler))
  };
};

export default connect(null, mapDispatchToProps)(NewTask);
