import * as actions from './actions';

const initialState = {
  tasks: [],
  token: getTokenFromLS(),
  isAdmin: !!getTokenFromLS(),
  currentPage: 1,
  countOfPages: 1,
  sortField: 'username',
  sortDirection: 'asc'
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.TASKS_LOADED:
      return {
        ...state,
        tasks: action.payload.tasks,
        countOfPages: action.payload.countOfPages
      };
    case actions.TASK_ADDED:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        countOfPages: ++state.countOfPages
      };
    case actions.LOGGED_IN:
      return {
        ...state,
        token: action.payload,
        isAdmin: true
      };
    case actions.LOGGED_OUT:
      return {
        ...state,
        token: null,
        isAdmin: false
      };
    default:
      return state;
  }
}

function getTokenFromLS() {
  return localStorage.getItem('TASKS_ADMIN_TOKEN');
}
