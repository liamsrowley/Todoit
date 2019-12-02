export const errorReducer = (state = {}, action) => {

  // Check if dispatched actions contain ::REQUEST_FAILURE or ::REQUEST_SUCCESS
  const { type } = action;
  const matches = /(.*)::REQUEST_(FAILURE|SUCCESS)/.exec(type);

  if (!matches) {
    return state;
  }

  // Pull out the type of action (TODO, AUTH) and the status (SUCCESS, FAILURE)
  // from the matches array;
  const [, actionType, actionStatus] = matches;

  // If the status type is a failure, then return the payload containing the
  // error message under a key name that matches the type.
  return {
    ...state,
    [actionType.toLowerCase()]: actionStatus === 'FAILURE' ? action.payload : null
  }
}
