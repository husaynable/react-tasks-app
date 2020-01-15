export const TASKS_LOADED = 'TASKS_LOADED';
export const ADD_TASK = 'ADD_TASK';
export const TASK_ADDED = 'TASK_ADDED';
export const TASK_ADDING_ERROR = 'TASK_ADDING_ERROR';

export const LOGGED_IN = 'LOGGED_IN';
export const LOGGED_OUT = 'LOGGED_OUT';

export const SET_PAGE = 'SET_PAGE';

const getUrl = path =>
  `https://uxcandy.com/~shapoval/test-task-backend/v2/${path}?developer=HusainEsambaev`;

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
        console.log(body);
        dispatch({
          type: TASKS_LOADED,
          payload: {
            tasks: body.message.tasks,
            countOfPages: Math.floor(body.message.tasks.length / 3)
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
          dispatch({ type: TASK_ADDED, payload: body.message });
        }
      });
  };
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
          dispatch({ type: LOGGED_IN, payload: body.message.token });
        }
      });
  };
};
