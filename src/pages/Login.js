import React from 'react';
import { Card, Form, Alert, Button } from 'react-bootstrap';

const Login = () => {
  return (
    <Card className="container">
      <Card.Body>
        <Card.Title>Авторизация</Card.Title>
        <Form>
          <Form.Group controlId="username">
            <Form.Label>Имя пользователя</Form.Label>
            <Form.Control required />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Пароль</Form.Label>
            <Form.Control type="password" />
          </Form.Group>

          <Alert variant="danger">Введены неверные данные!</Alert>
          <Button type="button">Добавить</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Login;
