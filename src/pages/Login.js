import React, { useState } from 'react';
import { Card, Form, Alert, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { login } from '../actions';
import { connect } from 'react-redux';

const Login = ({ onLogin }) => {
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [showErrorsAlert, setShowErrorsAlert] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});

  const sendHandler = () => {
    const form = new FormData();
    form.append('username', username);
    form.append('password', password);

    onLogin(form, successHandler, errorHandler);
  };

  const successHandler = () => {
    history.push('/');
  };

  const errorHandler = errorMsg => {
    setShowErrorsAlert(true);
    setErrorMessages(errorMsg);
  };

  return (
    <Card className="container">
      <Card.Body>
        <Card.Title>Авторизация</Card.Title>
        <Form onChange={() => setShowErrorsAlert(false)}>
          <Form.Group controlId="username">
            <Form.Label>Имя пользователя</Form.Label>
            <Form.Control
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Пароль</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Form.Group>

          {showErrorsAlert ? (
            <Alert variant="danger">
              {Object.entries(errorMessages).map(errorMsg => (
                <div key={errorMsg[0]}>
                  <strong>{errorMsg[0]}: </strong>
                  {errorMsg[1]}
                </div>
              ))}
            </Alert>
          ) : null}

          <Button onClick={sendHandler} type="button">
            Войти
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (form, successHandler, errorHandler) =>
      dispatch(login(form, successHandler, errorHandler))
  };
};

export default connect(null, mapDispatchToProps)(Login);
