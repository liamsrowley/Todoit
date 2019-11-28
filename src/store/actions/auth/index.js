import { auth } from '../../../firebase';
import { __requestAction } from '../firebase';

// Action Type Definitions
export const SIGN_IN = 'AUTH::SIGN_IN';
export const SIGN_OUT = 'AUTH::SIGN_OUT';
export const AUTH_REQUEST_START = 'AUTH::REQUEST_START';
export const AUTH_REQUEST_SUCCESS = 'AUTH::REQUEST_SUCCESS';
export const AUTH_REQUEST_FAILURE = 'AUTH::REQUEST_FAILURE';

// Object containing request types used to determine loading state for
// auth actions
const requestTypes = {
  'start': AUTH_REQUEST_START,
  'success': AUTH_REQUEST_SUCCESS,
  'failure': AUTH_REQUEST_FAILURE
};

// A base configuration object containing all shared key/value pairs
const baseConfig = {
  requestTypes
}

/********************
* The following actions follow the same format:
* A callback function that carries out the main action (sign in, registration, etc)
* A requestConfig object that is then passed into the __requestAction action
* __requestAction then dispatches the appropriate actions for loading states,
* error handling, notification messages and invokes the callback function
* *******************/
export const register = (email, password) => (dispatch) => {
  const authAction = async () => {
    await auth.createUserWithEmailAndPassword(email, password);
  }

  const requestConfig = {
    ...baseConfig,
    callback: authAction,
    redirectTo: '/'
  }

  dispatch(__requestAction(requestConfig));
}

export const signIn = (email, password) => (dispatch) => {
  const authAction = async () => {
    await auth.signInWithEmailAndPassword(email, password);
  }

  const requestConfig = {
    ...baseConfig,
    callback: authAction,
    redirectTo: '/'
  }

  dispatch(__requestAction(requestConfig));
}

export const signOut = () => (dispatch) => {
  const authAction = async () => {
    await auth.signOut();
  }

  const requestConfig = {
    ...baseConfig,
    callback: authAction,
    redirectTo: '/auth/signin'
  }

  dispatch(__requestAction(requestConfig));
}

export const setupAuthListener = () => (dispatch) => {
  auth.onAuthStateChanged(user => {
    if (user) {
      dispatch({ type: SIGN_IN, payload: user });
    } else {
      dispatch({ type: SIGN_OUT });
    }
  })
}
