import { useDispatch } from 'react-redux';
import { signIn, signOut, register, setupAuthListener } from '../store/actions/auth';

export const useAuth = () => {

  const dispatch = useDispatch();

  const doSignIn = (email, password) => {
    dispatch(signIn(email, password));
  }

  const doSignOut = () => {
    dispatch(signOut());
  }

  const doRegister = (email, password) => {
    dispatch(register(email, password));
  }

  const doSetupAuthListener = () => {
    dispatch(setupAuthListener());
  }

  return {
    signIn: doSignIn,
    signOut: doSignOut,
    register: doRegister,
    setupAuthListener: doSetupAuthListener
  }

}
