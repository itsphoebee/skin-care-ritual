export default (state = {rituals: []}, action) => {

  switch (action.type) {
    case 'LOAD_ALL_RITUALS':
      return Object.assign({}, state, {rituals: action.rituals})

//     case 'LIKE_RITUAL':
//       let index = state.rituals.findIndex(ritual => ritual.id === action.ritualId)
//       let ritual = state.rituals[index]
//       let updatedRituals = Object.assign({}, state.rituals, ritual)
// debugger
//       return {rituals:[...state.rituals.slice(0, index),
//         Object.assign({}, ritual, { likes: ritual.likes += 1 })
//         ,...state.rituals.slice(index + 1)]}

    case 'LIKE_RITUAL':
      let likedRitual = state.rituals.filter(ritual =>
        ritual.id === action.ritualId
      )
      likedRitual[0].likes += 1
      return Object.assign({}, state, {ritual: likedRitual})

    case 'DISLIKE_RITUAL':
      let dislikedRitual = state.rituals.filter(ritual =>
        ritual.id === action.ritualId
      )
      dislikedRitual[0].likes -= 1
        return Object.assign({}, state, {ritual: dislikedRitual})

    default:
      return state;
  }
};
