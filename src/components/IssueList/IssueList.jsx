import React from 'react'
import './IssueList.css'

function IssueList({ issues }) {
  return (
    <div className="issue-list-container ">
      <div className="search-filter-section">
        <input 
          type="text" 
          className="search-input"
          placeholder="Search by description"
        />
        <div className="filter-section">
          <span className="filter-label">Filter:</span>
          <div className="filter-buttons">
            <button className="filter-btn filter-btn-all">All</button>
            <button className="filter-btn filter-btn-open">Open</button>
            <button className="filter-btn filter-btn-close">Close</button>
          </div>
        </div>
      </div>

      <ul className="issue-list bg-gray-600">
        {issues.map((issue) => (
          <li key={issue.id} className="issue-item ">
            <div className="issue-title">
              <h3>{issue.title}</h3>
              <button className="status-btn">new</button>
            </div>
            
            <div className="issue-info">
              <div className="info-row">
                <span className="info-label">Author:</span>
                <span>{issue.author}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Severity:</span>
                <span>{issue.severity}</span>
              </div>
            </div>

            <div className="action-buttons">
              <button className="btn-close">Close</button>
              <button className="btn-delete">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default IssueList