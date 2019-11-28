import {
  NOTIFICATION_CREATE,
  NOTIFICATION_CLEAR
} from '../actions/notifications';

import _ from 'lodash';

export const notificationReducer = (state = {}, action) => {
  switch (action.type) {
    case NOTIFICATION_CREATE:
      return { ...state, [action.payload.id]: action.payload };

    case NOTIFICATION_CLEAR:
      return _.omit(state, action.payload);

    default:
      return state;
  }
}
