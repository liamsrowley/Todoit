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

// Object containing request types used to determine loading state for
// auth actions
const requestTypes = {
  'start': TODO_REQUEST_START,
  'success': TODO_REQUEST_SUCCESS,
  'failure': TODO_REQUEST_FAILURE
}

// A base configuration object containing all shared key/value pairs
const baseConfig = {
  collectionName: 'todos',
  requestTypes
}


export const createTodo = (todo) => (dispatch, getState) => {

  const uid = getState().auth.uid;

  const config = {
    ...baseConfig,
    docData: { ...todo, createdBy: uid },
    notifyMessage: {
      title: 'Todo Created',
      description: 'Todo has been created and saved.'
    },
    actionType: TODO_CREATE,
  };

  dispatch(__createDoc(config));

}


export const fetchUserTodos = () => (dispatch, getState) => {

  const uid = getState().auth.uid;

  const config = {
    ...baseConfig,
    query: {
      key: 'createdBy',
      operator: '==',
      value: uid
    },
    actionType: TODO_FETCH_ALL
  };

  dispatch(__fetchCollection(config));

}


export const deleteTodo = (id) => (dispatch) => {

  const config = {
    ...baseConfig,
    docId: id,
    notifyMessage: {
      title: 'Todo Deleted',
      description: 'We have deleted your todo for you.'
    },
    actionType: TODO_DELETE
  };

  dispatch(__deleteDoc(config));

}


export const editTodo = (id, formValues) => (dispatch, getState) => {

  const todo = getState().todos[id];

  const config = {
    ...baseConfig,
    docIdToEdit: id,
    docData: { ...todo, ...formValues },
    notifyMessage: {
      title: 'Todo Edited!',
      description: 'Todo has been edited and saved.'
    },
    actionType: TODO_EDIT
  };

  dispatch(__editDoc(config));

}
