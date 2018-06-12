// Action Creators
const getRituals = rituals => {
  return {
    type: 'LOAD_ALL_RITUALS',
    rituals
  }
}

const addRitual = ritual => {
  return {
    type: 'ADD_RITUAL',
    ritual
  }
}

const updateRitual = ritual => {
  return {
    type: 'UPDATE_RITUAL',
    ritual
  }
}

const likeRitual = ritual => {
  return {
    type: 'LIKE_RITUAL',
    ritual
  }
}

const dislikeRitual = ritual => {
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

export function createRitual(ritual, history) {
  return (dispatch) => {
    return fetch(`http://localhost:3001/rituals`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(ritual)
    })
    .then(response => response.json())
    .then(ritual => {
      dispatch(addRitual(ritual))
      history.push(`/rituals/${ritual.id}`)
    })
  }
}

export function editRitual(ritual, history) {
  return (dispatch) => {
    return fetch(`http://localhost:3001/rituals/${ritual.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(ritual)
    })
    .then(response => response.json())
    .then(ritual => {
      dispatch(updateRitual(ritual))
      history.push(`/rituals/${ritual.id}`)
    })
  }
}

export function addLike(ritual){
  let newRitual = Object.assign({}, ritual, ritual.likes = ritual.likes +1)
  return (dispatch) => {
    return fetch(`http://localhost:3001/rituals/${ritual.id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newRitual)
    })
    .then(response => response.json())
    .then(ritual => {
      dispatch(likeRitual(newRitual))
    })
  }
}

export function addDislike(ritual){
  let newRitual = Object.assign({}, ritual, ritual.likes = ritual.likes -1)
  return (dispatch) => {
    return fetch(`http://localhost:3001/rituals/${ritual.id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newRitual)
    })
    .then(response => response.json())
    .then(ritual => {
      dispatch(dislikeRitual(newRitual))
    })
  }
}
