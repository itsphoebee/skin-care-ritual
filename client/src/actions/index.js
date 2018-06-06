// Action Creators
const getRituals = rituals => {
  return {
    type: 'LOAD_ALL_RITUALS',
    rituals
  }
}

export const likeRitual = ritualId => {
  return {
    type: 'LIKE_RITUAL',
    ritualId
  }
}

export const dislikeRitual = ritualId => {
  return {
    type: 'DISLIKE_RITUAL',
    ritualId
  }
}

// Async Actions
export function loadRituals() {
  return (dispatch) => {
    return fetch(`http://localhost:3001/rituals`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(rituals => {
      dispatch(getRituals(rituals))
    })
  }
}
