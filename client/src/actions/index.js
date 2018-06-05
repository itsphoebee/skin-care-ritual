export function loadRituals() {
  return (dispatch) => {
    return fetch(`http://localhost:3001/rituals`)
    .then(response => response.json())
    .then(rituals => {
      dispatch({
        type: 'LOAD_ALL_RITUALS', payload: rituals
      })
    })
  }
}

export function loadRitual(id) {
  return (dispatch) => {
    return fetch(`http://localhost:3001/rituals/${id}`)
    .then(response => response.json())
    .then(ritual => {
      dispatch({
        type: 'LOAD_RITUAL', payload: ritual
      })
    })
  }
}
