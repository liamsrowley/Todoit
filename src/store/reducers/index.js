import { combineReducers } from 'redux';
import { todoReducer } from './todoReducer';
import { authReducer } from './authReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  'auth': authReducer,
  'todos': todoReducer,
  'form': formReducer
});
