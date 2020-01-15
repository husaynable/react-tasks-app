import React from 'react';
import { Form, Button, Alert, Card } from 'react-bootstrap';

import './NewTask.css';

const NewTask = () => {
  return (
    <Card className="NewTask">
      <Card.Body>
        <Card.Title>Новая задача</Card.Title>

        <Form>
          <Form.Group controlId="username">
            <Form.Label>Имя пользователя</Form.Label>
            <Form.Control required />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
          <Form.Group controlId="text">
            <Form.Label>Текст</Form.Label>
            <Form.Control as="textarea"></Form.Control>
          </Form.Group>

          <Alert variant="success">Успешно добавлено!</Alert>
          <Button type="button">Добавить</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default NewTask;
