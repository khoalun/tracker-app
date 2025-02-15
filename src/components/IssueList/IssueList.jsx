import React  from 'react'

function IssueList({ issues, onRefresh }) {
    return (
      <ul className="issue-list__list">
        {issues.map((issue) => (
          <li key={issue._id} className="issue-list-item">
            <div className="list-item-header">
              <h3 className="list-item-title">{issue.title}</h3>
              <span className="list-item-status">{issue.status}</span>
            </div>
            
            <div className="list-item-content">
              <p className="issue-name">
                Author: {issue.author}
              </p>
              <span className="list-item-severity">
                Severity: {issue.severity}
              </span>
              <div className="list-item-group-btn">
                <button className="btn btn--close">Close</button>
                <button className="btn btn--delete">Delete</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    )
  }
  
  export default IssueList