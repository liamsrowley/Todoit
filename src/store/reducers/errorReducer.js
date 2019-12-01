export const errorReducer = (state = {}, action) => {

  const { type } = action;
  const matches = /(.*)::REQUEST_FAILURE/.exec(type);

  if (!matches) {
    return state;
  }

  const [, actionType] = matches;

  return {
    ...state,
    [actionType.toLowerCase()]: action.payload
  }


}
