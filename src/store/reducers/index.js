import { combineReducers } from 'redux';
import { todoReducer } from './todoReducer';
import { authReducer } from './authReducer';
import { notificationReducer } from './notificationReducer';
import { loadingReducer } from './loadingReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  'auth': authReducer,
  'todos': todoReducer,
  'form': formReducer,
  'loading': loadingReducer,
  'notifications': notificationReducer
});
