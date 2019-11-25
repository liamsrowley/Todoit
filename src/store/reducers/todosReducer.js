import {
  TODO_CREATE
} from '../actions/todos';

import _ from 'lodash';

export const todosReducer = (state = {}, action) => {

  switch (action.type) {
    case TODO_CREATE:
      return { ...state, [action.payload.id]: action.payload };

    default:
      return state;
  }
}
