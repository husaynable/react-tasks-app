import React from 'react';
import { Pagination } from 'react-bootstrap';
import { connect } from 'react-redux';
import { loadTasks, setCurrentPage } from '../actions';

const Paginator = ({
  currPage,
  countOfPages,
  sortField,
  sortDirection,
  onLoadTasks,
  onSetCurrentPage
}) => {
  const changePageHandler = page => {
    onSetCurrentPage(page);
    onLoadTasks(page, sortField, sortDirection);
  };
  console.log(countOfPages);
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Pagination>
        <Pagination.First
          onClick={() => changePageHandler(1)}
          disabled={currPage === 1}
        />
        <Pagination.Prev
          onClick={() => changePageHandler(currPage - 1)}
          disabled={currPage === 1}
        />
        {new Array(countOfPages).fill(null).map((_, i) => (
          <Pagination.Item
            key={i + 1}
            active={i + 1 === currPage}
            onClick={() => changePageHandler(i + 1)}
          >
            {i + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => changePageHandler(currPage + 1)}
          disabled={currPage === countOfPages}
        />
        <Pagination.Last
          onClick={() => changePageHandler(countOfPages)}
          disabled={currPage === countOfPages}
        />
      </Pagination>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currPage: state.currentPage,
    countOfPages: state.countOfPages,
    sortField: state.sortField,
    sortDirection: state.sortDirection
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetCurrentPage: page => dispatch(setCurrentPage(page)),
    onLoadTasks: (page, sortField, sortDirection) =>
      dispatch(loadTasks(page, sortField, sortDirection))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Paginator);
