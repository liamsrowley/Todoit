import { firestore as db } from '../../../firebase.js';
import { __createNotification } from '../notifications';
import history from '../../../history';

// Wrapper action that takes a callback function and attempts to invoke it,
// dispatching errors and notification messages when relevant
export const __requestAction = (params) => async (dispatch) => {

  const {
    callback,
    notifyMessage = null,
    requestTypes,
    redirectTo
  } = params;

  try {
    dispatch({ type: requestTypes['start'] });
    await callback();
    dispatch({ type: requestTypes['success'] });
    if (notifyMessage) {
      dispatch(__createNotification(notifyMessage));
    }
    if (redirectTo) {
      history.push(redirectTo);
    }
  } catch (error) {
    dispatch({ type: requestTypes['failure'], payload: error });
  }
}

/********************
* The following actions follow the same format:
* A callback function that carries out the main action (sign in, registration, etc)
* A requestConfig object that is then passed into the __requestAction action
* __requestAction then dispatches the appropriate actions for loading states,
* error handling, notification messages and invokes the callback function
* *******************/
export const __createDoc = (params) => (dispatch) => {
  const {
    collectionName,
    docData,
    actionType,
    notifyMessage,
    requestTypes
  } = params;

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

  const requestConfig = {
    callback: firestoreAction,
    notifyMessage,
    requestTypes
  };

  dispatch(__requestAction(requestConfig));
}


export const __editDoc = (params) => async (dispatch) => {
  const {
    collectionName,
    docIdToEdit,
    docData,
    actionType,
    notifyMessage,
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

  const requestConfig = {
    callback: firestoreAction,
    notifyMessage,
    requestTypes
  };

  await dispatch(__requestAction(requestConfig));
}


export const __deleteDoc = (params) => (dispatch) => {
  const {
    collectionName,
    docId,
    actionType,
    notifyMessage,
    requestTypes
  } = params;

  const firestoreAction = async () => {
    await db.collection(collectionName).doc(docId).delete();
    dispatch({
      type: actionType,
      payload: docId
    });
  };

  const requestConfig = {
    callback: firestoreAction,
    notifyMessage,
    requestTypes
  };

  dispatch(__requestAction(requestConfig));
}


export const __fetchCollection = (params) => (dispatch) => {
  const {
    collectionName,
    actionType,
    query: { key, operator, value },
    notifyMessage,
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

  const requestConfig = {
    callback: firestoreAction,
    notifyMessage,
    requestTypes
  };

  dispatch(__requestAction(requestConfig));
}


export const __fetchDocById = (params) => (dispatch) => {
  const {
    collectionName,
    docId,
    actionType,
    notifyMessage,
    requestTypes
  } = params;

  const firestoreAction = async () => {
    const doc = await db.collection(collectionName).doc(docId).get();
    dispatch({
      type: actionType,
      payload: doc.data()
    });
  };

  const requestConfig = {
    callback: firestoreAction,
    notifyMessage,
    requestTypes
  };

  dispatch(__requestAction(requestConfig));
}
