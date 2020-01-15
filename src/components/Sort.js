import React from 'react';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

const Sort = () => {
  return (
    <>
      <h4 style={{ textAlign: 'right' }}>Сортировать по:</h4>
      <div style={{ textAlign: 'right', marginBottom: '15px' }}>
        <ToggleButtonGroup
          name="propertyName"
          type="radio"
          defaultValue={'username'}
        >
          <ToggleButton value={'username'}>Имя</ToggleButton>
          <ToggleButton value={'email'}>Email</ToggleButton>
          <ToggleButton value={'status'}>Статус</ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div style={{ textAlign: 'right' }}>
        <ToggleButtonGroup name="sortType" type="radio" defaultValue={'asc'}>
          <ToggleButton value={'asc'}>ASC</ToggleButton>
          <ToggleButton value={'desc'}>DESC</ToggleButton>
        </ToggleButtonGroup>
      </div>
    </>
  );
};

export default Sort;
