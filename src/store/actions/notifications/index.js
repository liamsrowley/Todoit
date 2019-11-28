
import uuid from 'uuid/v4';

// Action Type Definitions
export const NOTIFICATION_CREATE = 'NOTIFICATION::CREATE';
export const NOTIFICATION_CLEAR = 'NOTIFICATION::CLEAR';

export const __createNotification = (notification) => (dispatch) => {
  const notificationId = uuid();
  dispatch({ type: NOTIFICATION_CREATE, payload: { id: notificationId, ...notification } });
  setTimeout(() => {
    dispatch(__clearNotification(notificationId));
  }, [300]);
}

const __clearNotification = (id) => {
  return {
    type: NOTIFICATION_CLEAR,
    payload: id
  }
}
