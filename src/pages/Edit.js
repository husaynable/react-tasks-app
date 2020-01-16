import React, { useState } from 'react';
import { Form, Button, Alert, Card } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';

import { editTask } from '../actions';
import { getTokenFromLS, addEditedTaskId } from '../utils';

const Edit = () => {
  const { id, text, status } = useParams();
  const history = useHistory();

  const [editText, setEditText] = useState(text);
  const [editStatus, setEditStatus] = useState(status);

  const [showErrorsAlert, setShowErrorsAlert] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});

  const sendHandler = () => {
    const form = new FormData();
    form.append('text', editText);
    form.append('status', editStatus);
    form.append('token', getTokenFromLS());

    editTask(id, form, successHandler, errorHandler);
  };

  const successHandler = () => {
    if (text !== editText) {
      addEditedTaskId(id);
    }

    history.push('/');
  };

  const errorHandler = errorMessages => {
    setShowErrorsAlert(true);
    setErrorMessages(errorMessages);
  };

  return (
    <Card className="container">
      <Card.Body>
        <Card.Title>Редактировать задачу</Card.Title>

        <Form onChange={() => setShowErrorsAlert(false)}>
          <Form.Group controlId="text">
            <Form.Label>Текст</Form.Label>
            <Form.Control
              as="textarea"
              value={editText}
              onChange={e => setEditText(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <div>
            <Form.Check
              label="Выполнено"
              id="status"
              type="checkbox"
              checked={editStatus === '10'}
              onChange={e => setEditStatus(e.target.checked ? '10' : '0')}
            />
          </div>

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
          <Button type="button" onClick={sendHandler}>
            Сохранить
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Edit;
