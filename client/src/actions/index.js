// Action Creators
const getRituals = rituals => {
  return {
    type: 'LOAD_ALL_RITUALS',
    rituals
  }
}

export const likeRitual = ritual => {
  return {
    type: 'LIKE_RITUAL',
    ritual
  }
}

export const dislikeRitual = ritual => {
  return {
    type: 'DISLIKE_RITUAL',
    ritual
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

export function addLike(ritual){
  return (dispatch) => {
    return fetch(`http://localhost:3001/rituals/${ritual.id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(ritual)
    })
    .then(response => response.json())
    .then(ritual => {
      dispatch(likeRitual(ritual))
    })
  }
}

export function addDislike(ritual){
  debugger
  return (dispatch) => {
    return fetch(`http://localhost:3001/rituals/${ritual.id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(ritual)
    })
    .then(response => response.json())
    .then(ritual => {
      dispatch(dislikeRitual(ritual))
    })
  }
}
