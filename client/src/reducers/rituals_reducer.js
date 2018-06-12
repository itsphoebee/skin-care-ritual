export default (state = [], action) => {

  switch (action.type) {
    case 'LOAD_ALL_RITUALS':
      return action.rituals

    case 'ADD_RITUAL':
      return state.concat(action.ritual)

    case 'UPDATE_RITUAL':
      let updatedRitual = state.map(ritual => {
        if (ritual.id === action.ritual.id) {
          ritual.name = action.ritual.name
          ritual.category = action.ritual.category
          ritual.description = action.ritual.description
          return ritual
        } else {
          return ritual
        }
      });
      return updatedRitual;

    case 'LIKE_RITUAL':
      let likedRituals = state.map(ritual => {
        if (ritual.id === action.ritual.id) {
          return action.ritual
        } else {
          return ritual
        }
      })
      return likedRituals

    case 'DISLIKE_RITUAL':
      let newRituals = state.map(ritual => {
        if (ritual.id === action.ritual.id) {
          return action.ritual
        } else {
          return ritual
        }
      })
      return newRituals

    default:
      return state;
  }
};
