import {
  SIGN_IN,
  SIGN_OUT
} from '../actions/auth';

const INITIAL_STATE = {
  uid: null,
  displayName: null,
  photoURL: null,
  email: null,
  emailVerified: false,
  phoneNumber: null,
  isAnonymous: false,
  tenantId: null,
  providerData: [],
  apiKey: null,
  appName: null,
  authDomain: null,
  stsTokenManager: {},
  redirectEventId: null,
  lastLoginAt: null,
  createdAt: null
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case SIGN_IN:
      return action.payload;

    case SIGN_OUT:
      return INITIAL_STATE;

    default:
      return state;
  }
}
