import errorStrings from '../../../errorStrings';

export const ERROR_CREATE = 'ERROR::CREATE_ERROR';
export const ERROR_CLEAR = 'ERROR::CLEAR_ERROR';

export const __createError = (error) => (dispatch) => {
  dispatch({
    type: ERROR_CREATE,
    payload: {
      code: error.code,
      message: errorStrings[error.code]
    }
  });

  setTimeout(() => {
    dispatch(__clearError(error.code));
  }, 5000);
};

const __clearError = (errorId) => ({
  type: ERROR_CLEAR,
  payload: errorId
});
