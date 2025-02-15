import { useReducer } from 'react'
import { api } from '../../services/api'
import { ACTIONS } from '../../store/constants'

// Initial state
const initialState = {
  title: '',
  author: 'Sunny',
  severity: 'Low',
  status: 'Open'
}

// Reducer
function formReducer(state, action) {
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

function IssueForm({ onAddSuccess }) {
  const [formState, dispatch] = useReducer(formReducer, initialState)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      // Format data
      const formData = {
        title: formState.title,
        author: formState.author,
        severity: formState.severity,
        status: 'Open'
      }

      // send data to app component
      onAddSuccess(formData)
      
      // Reset form
      dispatch({ type: ACTIONS.RESET_FORM })

    } catch (error) {
      console.error('Error:', error)
    }
  }


  // Log state changes
  console.log('Current Form State:', formState)

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="top-form">
          {/* User  Input  Title*/}
          <div className="top-form-group">
            <label className="input-title">Title</label>
            <input
              type="text"
              className="issue-input"
              value={formState.title}
              onChange={(e) => {
                console.log('Title changed:', e.target.value)
                dispatch({
                  type: ACTIONS.SET_FIELD,
                  field: 'title',
                  value: e.target.value
                })
              }}
              placeholder="Enter title..."
              required
            />
          </div>

          {/* Select Author */}
          <div className="top-form-group">
            <label className="input-title">Author</label>
            <select
              className="severity-status"
              value={formState.author}
              onChange={(e) => {
                console.log('Author changed:', e.target.value)
                dispatch({
                  type: ACTIONS.SET_FIELD,
                  field: 'author',
                  value: e.target.value
                })
              }}
            >
              <option value="Sunny">Sunny</option>
              <option value="Tony">Tony</option>
            </select>
          </div>

          {/* Severity Select */}
          <div className="top-form-group">
            <label className="input-title">Severity</label>
            <select
              className="severity-status"
              value={formState.severity}
              onChange={(e) => {
                console.log('Severity changed:', e.target.value)
                dispatch({
                  type: ACTIONS.SET_FIELD,
                  field: 'severity',
                  value: e.target.value
                })
              }}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="wrap-submit-btn">
            <button 
              type="submit" 
              className="btn"
              disabled={!formState.title.trim()}
            >
              Add
            </button>
          </div>
        </div>
      </form>

      {/* Display current form data */}
      <div style={{ marginTop: '20px' }}>
        <h3>Current Form Data:</h3>
        <pre>
          {JSON.stringify(formState, null, 2)}
        </pre>
      </div>
    </div>
  )
}



export default IssueForm