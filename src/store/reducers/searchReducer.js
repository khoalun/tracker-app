export const SEARCH_ACTIONS = {
    SET_SEARCH_TERM: 'SET_SEARCH_TERM',
    SET_FILTER: 'SET_FILTER'
  }
  
  export const initialSearchState = {
    searchTerm: '',
    filter: 'all'
  }
  
  export const searchReducer = (state, action) => {
    switch (action.type) {
      case SEARCH_ACTIONS.SET_SEARCH_TERM:
        return {
          ...state,
          searchTerm: action.payload
        }
      case SEARCH_ACTIONS.SET_FILTER:
        return {
          ...state,
          filter: action.payload
        }
      default:
        return state
    }
  }