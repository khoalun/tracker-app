import React, { useEffect, useState } from 'react'
import { api } from '../../services/api'

function IssueList() {
  const [issues, setIssues] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await api.getTodos()
        console.log('Component received data:', response) 
        setIssues(response.data || [])
        setLoading(false)
      } catch (error) {
        console.error('Error:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <div>Loading...</div>

  return (
    <div>
      <h1>Issue List</h1>
      {issues && issues.length > 0 ? (
        <ul>
          {issues.map((issue) => (
            <li key={issue._id}>
              <h3>{issue.title}</h3>
              <p>Status: {issue.status}</p>
              <p>Severity: {issue.severity}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No issues found</p>
      )}
      
    </div>
  )
}

export default IssueList




