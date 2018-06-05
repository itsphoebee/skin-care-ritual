export default (state = {rituals: []}, action) => {

  switch (action.type) {
    case 'LOAD_ALL_RITUALS':
      return Object.assign({}, state, {rituals: action.payload})

    case 'LOAD_RITUAL':
      return Object.assign({}, state, {ritual: action.payload})

    default:
      return state;
  }
};
