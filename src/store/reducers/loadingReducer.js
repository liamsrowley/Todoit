const INITIAL_STATE = {
  todo: false,
  auth: false
}

export const loadingReducer = (state = INITIAL_STATE, action) => {

  const { type } = action;
  const matches = /(.*)::REQUEST_(START|SUCCESS|FAILURE)/.exec(type);

  if (!matches) {
    return state;
  }


  const [, requestName, requestState] = matches;

  return {
    ...state,
    [requestName.toLowerCase()]: requestState === 'START'
  }

}
