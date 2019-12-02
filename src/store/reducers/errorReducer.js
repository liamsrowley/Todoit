export const errorReducer = (state = {}, action) => {

  const { type } = action;
  const matches = /(.*)::REQUEST_(FAILURE|SUCCESS)/.exec(type);

  if (!matches) {
    return state;
  }

  const [, actionType, actionStatus] = matches;

  return {
    ...state,
    [actionType.toLowerCase()]: actionStatus === 'FAILURE' ? action.payload : null
  }


}
