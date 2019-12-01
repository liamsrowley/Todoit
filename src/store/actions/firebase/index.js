import { firestore as db } from '../../../firebase.js';
import { __createNotification } from '../notifications';
import { __createError } from '../errors';
import history from '../../../history';

/**
* @description - Wrapper that executes database actions and handles dispatching
* errors and notifications when relevant.
* @param {Object} params - Configuration object containing the following:
*   @param {Function} callback - The action to perform on the database
*   @param {Object} notification - An object detailing which notification to send upon completion
*     @param {String} title - The name of the notification
*     @param {String} description - A description of what action has been done
*   @param {Object} requestTypes - An object containing string definitions used
*   to dispatch request states.
*   @param {String} redirectTo - A string path to programatically redirect the user
*   upon action completion
**/
export const __requestAction = (params) => async (dispatch) => {

  const {
    callback,
    notification = null,
    requestTypes,
    redirectTo
  } = params;

  try {
    dispatch({ type: requestTypes['start'] });
    await callback();
    dispatch({ type: requestTypes['success'] });
    if (notification) {
      dispatch(__createNotification(notification));
    }
    if (redirectTo) {
      history.push(redirectTo);
    }
  } catch (error) {
    dispatch({ type: requestTypes['failure'], payload: error.message });
    // dispatch(__createError(error));
  }
}

/**
* @description - Custom Firebase function that adds data to a collection
* @param {Object} params - Configuration object containing the following:
*   @param {String} collectionName - The collection the data will be added to
*   @param {Object} docData - The data that will be added to the collection
*   @param {String} actionType - The action type that will be dispatched upon completion
*   @param {Object} notification - An object detailing which notification to send upon completion
*     @param {String} title - The name of the notification
*     @param {String} description - A description of what action has been done
*   @param {Object} requestTypes - An object containing string definitions used
*   to dispatch request states.
**/
export const __createDoc = (params) => (dispatch) => {
  const {
    collectionName,
    docData,
    actionType,
    notification,
    requestTypes
  } = params;

  // Define the database action we want to do
  const firestoreAction = async () => {
    const docRef = await db.collection(collectionName).add(docData);
    dispatch({
      type: actionType,
      payload: {
        ...docData,
        id: docRef.id
      }
    });
  };

  const requestParams = {
    callback: firestoreAction,
    notification,
    requestTypes
  };

  dispatch(__requestAction(requestParams));
}

/**
* @description - Custom Firebase function that edits a doc based on the Id
* @param {Object} params - Configuration object containing the following:
*   @param {String} collectionName - The collection the data will be added to
*   @param {String} docIdToEdit - The id of the doc that will be edited
*   @param {Object} docData - The data that will be added to the collection
*   @param {String} actionType - The action type that will be dispatched upon completion
*   @param {Object} notification - An object detailing which notification to send upon completion
*     @param {String} title - The name of the notification
*     @param {String} description - A description of what action has been done
*   @param {Object} requestTypes - An object containing string definitions used
*   to dispatch request states.
**/
export const __editDoc = (params) => async (dispatch) => {
  const {
    collectionName,
    docIdToEdit,
    docData,
    actionType,
    notification,
    requestTypes
  } = params;

  const firestoreAction = async () => {
    await db.collection(collectionName).doc(docIdToEdit).update(
      docData
    );
    dispatch({
      type: actionType,
      payload: {
        id: docIdToEdit,
        ...docData
      }
    });
  };

  const requestParams = {
    callback: firestoreAction,
    notification,
    requestTypes
  };

  await dispatch(__requestAction(requestParams));
}

/**
* @description - Custom Firebase function that deletes a doc from a collection
* @param {Object} params - Configuration object containing the following:
*   @param {String} collectionName - The collection the data will be added to
*   @param {String} docId - The id of the doc that will be deleted
*   @param {String} actionType - The action type that will be dispatched upon completion
*   @param {Object} notification - An object detailing which notification to send upon completion
*     @param {String} title - The name of the notification
*     @param {String} description - A description of what action has been done
*   @param {Object} requestTypes - An object containing string definitions used
*   to dispatch request states.
**/
export const __deleteDoc = (params) => (dispatch) => {
  const {
    collectionName,
    docId,
    actionType,
    notification,
    requestTypes
  } = params;

  const firestoreAction = async () => {
    await db.collection(collectionName).doc(docId).delete();
    dispatch({
      type: actionType,
      payload: docId
    });
  };

  const requestParams = {
    callback: firestoreAction,
    notification,
    requestTypes
  };

  dispatch(__requestAction(requestParams));
}

/**
* @description - Custom Firebase function that fetches a collection
* @param {Object} params - Configuration object containing the following:
*   @param {String} collectionName - The collection the data will be added to
*   @param {String} actionType - The action type that will be dispatched upon completion
*   @param {Object} query - An object containing keys to construct a query
*     @param {String} key - The key we want to operate on
*     @param {String} operator - The type of operation (Ex. === or !==)
*     @param {String} value - The value we want to test against the key
*   @param {Object} notification - An object detailing which notification to send upon completion
*     @param {String} title - The name of the notification
*     @param {String} description - A description of what action has been done
*   @param {Object} requestTypes - An object containing string definitions used
*   to dispatch request states.
**/
export const __fetchCollection = (params) => (dispatch) => {
  const {
    collectionName,
    actionType,
    query: { key, operator, value },
    notification,
    requestTypes
  } = params;

  const firestoreAction = async () => {
    const querySnapshot = await db.collection(collectionName).where(key, operator, value).get()
    let collection = {};
    querySnapshot.forEach(doc => {
      collection = {
        ...collection,
        [doc.id]: {
          id: doc.id,
          ...doc.data()
        }
      }
    })
    dispatch({
      type: actionType,
      payload: collection
    });
  };

  const requestParams = {
    callback: firestoreAction,
    notification,
    requestTypes
  };

  dispatch(__requestAction(requestParams));
}

/**
* @description - Custom Firebase function that fetches a doc by its id
* @param {Object} params - Configuration object containing the following:
*   @param {String} collectionName - The collection the data will be added to
*   @param {String} docId - The id of the doc that will be deleted
*   @param {String} actionType - The action type that will be dispatched upon completion
*   @param {Object} notification - An object detailing which notification to send upon completion
*     @param {String} title - The name of the notification
*     @param {String} description - A description of what action has been done
*   @param {Object} requestTypes - An object containing string definitions used
*   to dispatch request states.
**/
export const __fetchDocById = (params) => (dispatch) => {
  const {
    collectionName,
    docId,
    actionType,
    notification,
    requestTypes
  } = params;

  const firestoreAction = async () => {
    const doc = await db.collection(collectionName).doc(docId).get();
    dispatch({
      type: actionType,
      payload: doc.data()
    });
  };

  const requestParams = {
    callback: firestoreAction,
    notification,
    requestTypes
  };

  dispatch(__requestAction(requestParams));
}
