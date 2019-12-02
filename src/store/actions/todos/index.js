import _ from 'lodash';
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

/**
* @description - Creates a todo and adds it to the database
* @param {Object} todo - Object containing the todo
**/
export const createTodo = (todo) => (dispatch, getState) => {
  const uid = getState().auth.uid;

  const config = {
    ...baseConfig,
    docData: { ...todo, createdBy: uid },
    actionType: TODO_CREATE,
  };

  dispatch(__createDoc(config));
}

/**
* @description - Fetches all todos created by the user
**/
export const fetchUserTodos = () => (dispatch, getState) => {
  const uid = getState().auth.uid;

  const config = {
    ...baseConfig,
    query: {
      key: 'createdBy',
      operator: '==',
      value: uid,
      order: 'dateCreated'
    },
    actionType: TODO_FETCH_ALL
  };

  dispatch(__fetchCollection(config));
}

/**
* @description - Removes a todo from the database
* @param {String} id - The id of the todo that will be deleted
**/
export const deleteTodo = (id) => (dispatch) => {
  const config = {
    ...baseConfig,
    docId: id,
    actionType: TODO_DELETE
  };

  dispatch(__deleteDoc(config));
}

/**
* @description - Edits a todo by pulling its values from state and merging
* them with the newly edited values
* @param {String} id - The id of the todo that will be edited
* @param {Object} formValues - Object containing the new values that will be
* merged with the current values
**/
export const editTodo = (id, formValues) => async (dispatch, getState) => {
  // Pull the todo data from the redux store
  // Remove the isEditing key as it isn't needed in the database
  const todo = getState().todos[id];
  const editedTodo = _.omit(todo, 'isEditing');

  const config = {
    ...baseConfig,
    docIdToEdit: id,
    docData: { ...editedTodo, ...formValues },
    actionType: TODO_EDIT
  };

  await dispatch(__editDoc(config));
}
