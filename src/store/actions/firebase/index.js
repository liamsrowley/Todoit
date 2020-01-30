import { firestore as db } from '../../../firebase.js';
import { __createNotification } from '../notifications';
import history from '../../../history';
import errorStrings from '../../../errorStrings';


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
    console.log(error);
    dispatch({ type: requestTypes['failure'], payload: errorStrings[error.code] });
  }
}

export const __createDoc = (params) => (dispatch) => {
  const {
    collectionName,
    docData,
    actionType,
    notification,
    requestTypes
  } = params;

  const firestoreAction = async () => {
    const creationDate = Date.now();
    const docRef = await db.collection(collectionName).add({
      ...docData,
      dateCreated: creationDate
    });
    dispatch({
      type: actionType,
      payload: {
        ...docData,
        dateCreated: creationDate,
        id: docRef.id,
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

export const __fetchCollection = (params) => (dispatch) => {
  const {
    collectionName,
    actionType,
    query: { key, operator, value, order },
    notification,
    requestTypes,
  } = params;

  const firestoreAction = async () => {
    let colRef = db.collection(collectionName);
    let querySnapshot;

    if (operator && !order) {
      querySnapshot = await colRef.where(key, operator, value).get();
    } else if (order && !operator) {
      querySnapshot = await colRef.orderBy(order).get();
    } else if (order && operator) {
      console.log('This one should fire');
      querySnapshot = await colRef.where(key, operator, value).orderBy(order).get();
      console.log('but wtf');
    }

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
