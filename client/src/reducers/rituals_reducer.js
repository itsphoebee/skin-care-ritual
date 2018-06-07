export default (state = {rituals: []}, action) => {

  switch (action.type) {
    case 'LOAD_ALL_RITUALS':
      return Object.assign({}, state, {rituals: action.rituals})

    case 'LIKE_RITUAL':
      let likedRituals = state.rituals.map(ritual => {
        if (ritual.id === action.ritual.id) {
          ritual.likes += 1
          return ritual
        } else {
          return ritual
        }
      })
      return Object.assign({}, {rituals: likedRituals})

    case 'DISLIKE_RITUAL':
      let newRituals = state.rituals.map(ritual => {
        if (ritual.id === action.ritual.id) {
          ritual.likes -= 1
          return ritual
        } else {
          return ritual
        }
      })
      return Object.assign({}, {rituals: newRituals})

    default:
      return state;
  }
};
