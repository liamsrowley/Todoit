import {
  TODO_CREATE
} from '../actions/todos';

import _ from 'lodash';

export const todoReducer = (state = {}, action) => {

  switch (action.type) {
    case TODO_CREATE:
      return { ...state, [action.payload.id]: action.payload };

    default:
      return state;
  }
}
