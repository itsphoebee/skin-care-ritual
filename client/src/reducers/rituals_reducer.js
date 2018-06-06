export default (state = {rituals: []}, action) => {

  switch (action.type) {
    case 'LOAD_ALL_RITUALS':
      return Object.assign({}, state, {rituals: action.rituals})

    case 'LIKE_RITUAL':
      return state.rituals.filter(ritual => {
        if (ritual.id === action.ritualId) {
          ritual.likes += 1
        }
        debugger
        return ritual
      })
      // case 'DOWNVOTE_QUOTE':
      //   return state.filter(quote => {
      //     if (quote.id === action.quoteId && quote.votes > 0) {
      //       quote.votes -= 1
      //     }
      //   return quote
      // })
    default:
      return state;
  }
};
