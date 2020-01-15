import { getUrl, deleteToken, setTokenToLS } from './utils';

export const TASKS_LOADED = 'TASKS_LOADED';
export const ADD_TASK = 'ADD_TASK';
export const TASK_ADDED = 'TASK_ADDED';
export const TASK_ADDING_ERROR = 'TASK_ADDING_ERROR';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SORT_CHANGED = 'SORT_CHANGED';

export const TASK_EDIT = 'TASK_EDIT';

export const LOGGED_IN = 'LOGGED_IN';
export const LOGGED_OUT = 'LOGGED_OUT';

export const loadTasks = (
  page = 1,
  sortField = 'username',
  sortDirection = 'asc'
) => {
  return dispatch => {
    const params = new URLSearchParams({
      page,
      sort_field: sortField,
      sort_direction: sortDirection
    });

    fetch(getUrl('') + '&' + params.toLocaleString())
      .then(response => response.json())
      .then(body => {
        sortChanged(sortField, sortDirection);
        setCurrentPage(page);
        dispatch({
          type: TASKS_LOADED,
          payload: {
            tasks: body.message.tasks,
            countOfPages: Math.ceil(
              Number.parseInt(body.message['total_task_count'], 10) / 3
            )
          }
        });
      });
  };
};

export const addTask = (form, successHandler, errorHandler) => {
  return dispatch => {
    fetch(getUrl('create'), { method: 'POST', body: form })
      .then(res => res.json())
      .then(body => {
        if (body.status === 'error') {
          errorHandler(body.message);
        } else {
          successHandler();
          dispatch(loadTasks());
        }
      });
  };
};

export const setCurrentPage = page => {
  return {
    type: SET_CURRENT_PAGE,
    payload: page
  };
};

export const sortChanged = (field, direction) => {
  return {
    type: SORT_CHANGED,
    payload: { field, direction }
  };
};

export const editTask = (id, form, successHandler, errorHandler) => {
  fetch(getUrl('edit/' + id), { method: 'POST', body: form })
    .then(res => res.json())
    .then(body => {
      if (body.status === 'error') {
        errorHandler(body.message);
      } else {
        successHandler();
      }
    });
};

export const login = (form, successHandler, errorHandler) => {
  return dispatch => {
    fetch(getUrl('login'), { method: 'POST', body: form })
      .then(res => res.json())
      .then(body => {
        if (body.status === 'error') {
          errorHandler(body.message);
        } else {
          successHandler();
          setTokenToLS(body.message.token);
          dispatch({ type: LOGGED_IN });
        }
      });
  };
};

export const logout = () => {
  deleteToken();
  return {
    type: LOGGED_OUT
  };
};
