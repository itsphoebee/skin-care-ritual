export default (state = {rituals: []}, action) => {

  switch (action.type) {
    case 'LOAD_ALL_RITUALS':
      return Object.assign({}, state, {rituals: action.rituals})

    case 'LIKE_RITUAL':
      let likedRitual = state.rituals.filter(ritual =>
        ritual.id === action.ritual.id
      )
      likedRitual[0].likes += 1
      return Object.assign({}, state, {ritual: likedRitual})

    case 'DISLIKE_RITUAL':
      let dislikedRitual = state.rituals.filter(ritual =>
        ritual.id === action.ritual.id
      )
      dislikedRitual[0].likes -= 1
        return Object.assign({}, state, {ritual: dislikedRitual})

    default:
      return state;
  }
};
