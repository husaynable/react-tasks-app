import React, { useState, useEffect } from 'react';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { sortChanged, loadTasks } from '../actions';
import { connect } from 'react-redux';

const Sort = ({ currentPage, onSortChanged, onLoadTasks }) => {
  const [field, setField] = useState('username');
  const [direction, setDirection] = useState('asc');

  useEffect(() => {
    onSortChanged(field, direction);
    onLoadTasks(currentPage, field, direction);
  }, [onSortChanged, onLoadTasks, currentPage, field, direction]);

  return (
    <>
      <h4 style={{ textAlign: 'right' }}>Сортировать по:</h4>
      <div style={{ textAlign: 'right', marginBottom: '15px' }}>
        <ToggleButtonGroup
          name="propertyName"
          type="radio"
          defaultValue={field}
          onChange={setField}
        >
          <ToggleButton value={'username'}>Имя</ToggleButton>
          <ToggleButton value={'email'}>Email</ToggleButton>
          <ToggleButton value={'status'}>Статус</ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div style={{ textAlign: 'right' }}>
        <ToggleButtonGroup
          name="sortType"
          type="radio"
          defaultValue={direction}
          onChange={setDirection}
        >
          <ToggleButton value={'asc'}>Возр.</ToggleButton>
          <ToggleButton value={'desc'}>Убыв.</ToggleButton>
        </ToggleButtonGroup>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    currentPage: state.currentPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSortChanged: (field, direction) =>
      dispatch(sortChanged(field, direction)),
    onLoadTasks: (page, field, direction) =>
      dispatch(loadTasks(page, field, direction))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
