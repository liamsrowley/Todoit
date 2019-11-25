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
    actionType
  } = params;

  const firestoreAction = async () => {
    const docRef = await db.collection(collectionName).add(docData);
    dispatch({ type: actionType, payload: { ...docData, id: docRef.id } });
    console.log("Document added with id: ", docRef.id);
  };

  const requestConfig = {
    callback: firestoreAction,
    notifyMessage: 'Doc created!',
    requestTypes: {
      'start': 'DOC::CREATE_DOC_START',
      'success': 'DOC::CREATE_DOC_SUCCESS',
      'failure': 'DOC::CREATE_DOC_FAILURE'
    }
  };

  dispatch(__requestAction(requestConfig));

}

export const __editDoc = (params) => (dispatch) => {

  const {
    collectionName,
    docIdToEdit,
    docData
  } = params;

  const firestoreAction = async () => {
    await db.collection(collectionName).doc(docIdToEdit).set(
      docData,
      { merge: true }
    );
  };

  const requestConfig = {
    callback: firestoreAction,
    notifyMessage: 'Doc edited!',
    requestTypes: {
      'start': 'DOC::EDIT_DOC_START',
      'success': 'DOC::EDIT_DOC_SUCCESS',
      'failure': 'DOC::EDIT_DOC_FAILURE'
    }
  };

  dispatch(__requestAction(requestConfig));

}

export const __deleteDoc = (params) => (dispatch) => {

  const {
    collectionName,
    docId
  } = params;

  const firestoreAction = async () => {
    await db.collection(collectionName).doc(docId).delete();
    console.log("Doc deleted with id: ", docId);
  };

  const requestConfig = {
    callback: firestoreAction,
    notifyMessage: 'Doc edited!',
    requestTypes: {
      'start': 'DOC::DELETE_DOC_START',
      'success': 'DOC::DELETE_DOC_SUCCESS',
      'failure': 'DOC::DELETE_DOC_FAILURE'
    }
  };

  dispatch(__requestAction(requestConfig));

}

export const __fetchCollection = (params) => (dispatch) => {

  const {
    collectionName
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
    notifyMessage: 'Collection fetched!',
    requestTypes: {
      'start': 'COL::FETCH_COL_START',
      'success': 'COL::FETCH_COL_SUCCESS',
      'failure': 'COL::FETCH_COL_FAILURE'
    }
  };

  dispatch(__requestAction(requestConfig));

}

export const __fetchDocById = (params) => (dispatch) => {

  const {
    collectionName,
    docId
  } = params;

  const firestoreAction = async () => {
    const doc = await db.collection(collectionName).doc(docId).get();
    console.log("Fetched doc:", doc.data());
  };

  const requestConfig = {
    callback: firestoreAction,
    notifyMessage: 'Collection fetched!',
    requestTypes: {
      'start': 'DOC::FETCH_DOC_START',
      'success': 'DOC::FETCH_DOC_SUCCESS',
      'failure': 'DOC::FETCH_DOC_FAILURE'
    }
  };

  dispatch(__requestAction(requestConfig));

}
