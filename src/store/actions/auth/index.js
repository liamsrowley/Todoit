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


export const register = (email, password) => (dispatch) => {
  const authAction = async () => {
    await auth.createUserWithEmailAndPassword(email, password);
  }

  const requestParams = {
    ...baseConfig,
    callback: authAction,
    redirectTo: '/'
  }

  dispatch(__requestAction(requestParams));
}


export const signIn = (email, password) => (dispatch) => {
  const authAction = async () => {
    await auth.signInWithEmailAndPassword(email, password);
  }

  const requestParams = {
    ...baseConfig,
    callback: authAction,
    redirectTo: '/'
  }

  dispatch(__requestAction(requestParams));
}


export const signOut = () => (dispatch) => {
  const authAction = async () => {
    await auth.signOut();
  }

  const requestParams = {
    ...baseConfig,
    callback: authAction,
    redirectTo: '/auth/signin'
  }

  dispatch(__requestAction(requestParams));
}

export const sendPasswordResetEmail = (email) => (dispatch) => {
  const authAction = async () => {
    await auth.sendPasswordResetEmail(email);
  }

  const requestParams = {
    ...baseConfig,
    callback: authAction,
    notification: {
      title: 'Email Sent',
      description: 'Please check your spam folder'
    }
  }

  dispatch(__requestAction(requestParams));
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
