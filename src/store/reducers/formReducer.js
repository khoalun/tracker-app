import { ACTIONS } from '../constants'

export const initialState = {
  title: '',
  author: 'Sunny',
  severity: 'Low',
  description: '',
  status: 'Open'
}



export function formReducer(state, action) {
    switch (action.type) {
      case ACTIONS.SET_FIELD:
        return {
          ...state,
          [action.field]: action.value
        }
      case ACTIONS.RESET_FORM:
        return initialState
      default:
        return state
    }
  }