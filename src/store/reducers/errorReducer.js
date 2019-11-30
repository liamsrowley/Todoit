import {
  ERROR_CREATE,
  ERROR_CLEAR
} from '../actions/errors';

import _ from 'lodash';

export const errorReducer = (state = {}, action) => {

  switch (action.type) {
    case ERROR_CREATE:
      return { ...state, [action.payload.code]: action.payload };

    case ERROR_CLEAR:
      return _.omit(state, action.payload);

    default:
      return state;
  }

}
