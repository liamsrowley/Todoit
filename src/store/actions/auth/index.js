import { auth } from '../../../firebase';
import { __requestAction } from '../firebase';

export const SIGN_IN = 'AUTH::SIGN_IN';
export const SIGN_OUT = 'AUTH::SIGN_OUT';
export const AUTH_REQUEST_START = 'AUTH::REQUEST_START';
export const AUTH_REQUEST_SUCCESS = 'AUTH::REQUEST_SUCCESS';
export const AUTH_REQUEST_FAILURE = 'AUTH::REQUEST_FAILURE';

const requestTypes = {
  'start': AUTH_REQUEST_START,
  'success': AUTH_REQUEST_SUCCESS,
  'failure': AUTH_REQUEST_FAILURE
};

const baseConfig = {
  requestTypes
}

export const createUser = (email, password) => (dispatch) => {
  const authAction = async () => {
    await auth.createUserWithEmailAndPassword(email, password);
  }

  const requestConfig = {
    ...baseConfig,
    callback: authAction
  }

  dispatch(__requestAction(requestConfig));
}

export const signIn = (email, password) => (dispatch) => {
  const authAction = async () => {
    await auth.signInWithEmailAndPassword(email, password);
  }

  const requestConfig = {
    ...baseConfig,
    callback: authAction
  }

  dispatch(__requestAction(requestConfig));
}

export const signOut = () => (dispatch) => {
  const authAction = async () => {
    await auth.signOut();
  }

  const requestConfig = {
    ...baseConfig,
    callback: authAction
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
