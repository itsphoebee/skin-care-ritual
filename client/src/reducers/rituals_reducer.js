// change to state = []
export default (state = {rituals: []}, action) => {

  switch (action.type) {
    case 'LOAD_ALL_RITUALS':
      return Object.assign({}, state, {rituals: action.rituals})
      
    default:
      return state;
  }
};
