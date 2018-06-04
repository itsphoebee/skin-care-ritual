function search(query) {
  return fetch(`/api/rituals?q=${query}`, {
    accept: 'application/json',
  }).then(checkStatus)
    .then(parseJSON);
}
