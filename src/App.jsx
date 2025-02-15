import { useState, useEffect } from 'react'
import IssueForm from './components/IssueForm/IssueForm'
import IssueList from './components/IssueList/IssueList'
import { api } from './services/api'

function App() {
  const [issues, setIssues] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const fetchIssues = async () => {
    try {
      const response = await api.getTodos()
      setIssues(response.data || [])
    } catch (error) {
      console.error('Error fetching issues:', error)
    }
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  const handleAddIssue = (formData) => {
    // add new issue to state
    const newIssue = {
      id: Date.now(),
      ...formData,
      status: 'Open'
    }
    setIssues(prevIssues => [...prevIssues, newIssue])
  }

  return (
    <div className="container">
      <div className="main-content">
        <div className="app-title">
          <h1 className="app-name">ISSUE TRACKER</h1>
        </div>

        <IssueForm onAddSuccess={handleAddIssue} />
        

        <div className="main-feature">
          <input
                type="text"
                className="search-box"
                placeholder="Search by description"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="list-feature-filter">
              <span className="feature-label">Filter:</span>
              <div className="group-btn">
                <button className="btn filter-status-btn--all">All</button>
                <button className="btn filter-status-btn--open">Open</button>
                <button className="btn filter-status-btn--close">Close</button>
            </div>
          
            </div>

            
          <IssueList 
            issues={issues}
            onRefresh={fetchIssues} 
          />
        </div>
      </div>
    </div>
  )
}

export default App