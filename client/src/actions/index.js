// Action Creators
const getRituals = rituals => {
  return {
    type: 'LOAD_ALL_RITUALS',
    rituals
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
