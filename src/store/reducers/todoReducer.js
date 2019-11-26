import {
  TODO_CREATE,
  TODO_FETCH_ALL,
  TODO_DELETE,
  TODO_EDIT
} from '../actions/todos';

import _ from 'lodash';

export const todoReducer = (state = {}, action) => {

  switch (action.type) {
    case TODO_CREATE:
      return { ...state, [action.payload.id]: action.payload };

    case TODO_FETCH_ALL:
      return { ...state, ...action.payload };

    case TODO_EDIT:
      return { ...state, [action.payload.id]: action.payload };

    case TODO_DELETE:
      return _.omit(state, action.payload);

    default:
      return state;
  }
}
