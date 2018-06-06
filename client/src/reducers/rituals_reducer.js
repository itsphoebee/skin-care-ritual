export default (state = {rituals: []}, action) => {

  switch (action.type) {
    case 'LOAD_ALL_RITUALS':
    debugger
      return Object.assign({}, state, {rituals: action.rituals})

    default:
      return state;
  }
};
