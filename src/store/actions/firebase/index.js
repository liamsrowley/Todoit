import { firestore as db } from '../../../firebase.js';

// Wrapper action that takes a callback function and attempts to invoke it,
// dispatching errors and notification messages when relevant
const __requestAction = (params) => async (dispatch) => {

  const {
    callback,
    notifyMessage,
    requestTypes
  } = params;

  try {
    dispatch({ type: requestTypes['start'] });
    await callback();
    dispatch({ type: requestTypes['success'] });
  } catch ({ code, message }) {
    console.log(message);
    dispatch({ type: requestTypes['failure'], payload: message });
  }
}

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
    dispatch({ type: actionType, payload: { ...docData, id: docRef.id } });
    console.log("Document added with id: ", docRef.id);
  };

  const requestConfig = {
    callback: firestoreAction,
    notifyMessage,
    requestTypes
  };

  dispatch(__requestAction(requestConfig));

}

export const __editDoc = (params) => (dispatch) => {

  const {
    collectionName,
    docIdToEdit,
    docData,
    notifyMessage,
    requestTypes
  } = params;

  const firestoreAction = async () => {
    await db.collection(collectionName).doc(docIdToEdit).set(
      docData,
      { merge: true }
    );
  };

  const requestConfig = {
    callback: firestoreAction,
    notifyMessage,
    requestTypes
  };

  dispatch(__requestAction(requestConfig));

}

export const __deleteDoc = (params) => (dispatch) => {

  const {
    collectionName,
    docId,
    notifyMessage,
    requestTypes
  } = params;

  const firestoreAction = async () => {
    await db.collection(collectionName).doc(docId).delete();
    console.log("Doc deleted with id: ", docId);
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
    notifyMessage,
    requestTypes
  } = params;

  const firestoreAction = async () => {
    const querySnapshot = await db.collection(collectionName).get();
    let collection = [];
    querySnapshot.forEach(doc => {
      collection = [
        ...collection,
        doc.data()
      ]
    })
    console.log(collection);
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
    notifyMessage,
    requestTypes
  } = params;

  const firestoreAction = async () => {
    const doc = await db.collection(collectionName).doc(docId).get();
    console.log("Fetched doc:", doc.data());
  };

  const requestConfig = {
    callback: firestoreAction,
    notifyMessage,
    requestTypes
  };

  dispatch(__requestAction(requestConfig));

}
