import { __createDoc, __editDoc, __deleteDoc, __fetchCollection } from '../firebase';

// Action Type Definitions
export const TODO_CREATE = 'TODO::CREATE';
export const TODO_EDIT = 'TODO::EDIT';
export const TODO_DELETE = 'TODO::DELETE';
export const TODO_FETCH_ALL = 'TODO::FETCH_ALL';
export const TODO_FETCH = 'TODO::FETCH_SINGLE';
export const TODO_REQUEST_START = 'TODO::REQUEST_START';
export const TODO_REQUEST_SUCCESS = 'TODO::REQUEST_SUCCESS';
export const TODO_REQUEST_FAILURE = 'TODO::REQUEST_FAILURE';

const requestTypes = {
  'start': TODO_REQUEST_START,
  'success': TODO_REQUEST_SUCCESS,
  'failure': TODO_REQUEST_FAILURE
}

// Object keys that are shared among all actions
const baseConfig = {
  collectionName: 'todos',
  requestTypes
}

export const createTodo = (todo) => (dispatch) => {

  const config = {
    ...baseConfig,
    docData: todo,
    notifyMessage: 'Todo Created',
    actionType: TODO_CREATE,
  }

  dispatch(__createDoc(config));

}
