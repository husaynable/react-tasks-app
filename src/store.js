import * as actions from './actions';
import { getTokenFromLS } from './utils';

const initialState = {
  tasks: [],
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
    // case actions.TASK_ADDED:
    //   return {
    //     ...state,
    //     tasks: [...state.tasks, action.payload],
    //     countOfPages: ++state.countOfPages
    //   };
    case actions.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      };
    case actions.SORT_CHANGED:
      return {
        ...state,
        sortField: action.payload.field,
        sortDirection: action.payload.direction
      };
    case actions.LOGGED_IN:
      return {
        ...state,
        isAdmin: true
      };
    case actions.LOGGED_OUT:
      return {
        ...state,
        isAdmin: false
      };
    default:
      return state;
  }
}

export const getToken = getTokenFromLS;
