import { useState } from 'react'
import './App.css'
import IssueList from './components/IssueList/IssueList'

function App() {

  return (
    <div className="container">
      <div className="main-content">
        <section className="app-title">
          <h1 className="app-name">ISSUE TRACKER</h1>
        </section>

        <section className="form">
          <form action="" id="issueInputForm">
            <div className="top-form">
              <div className="top-form-group">
                <div className="input-title">Title</div>
                <input 
                  id="inputIssueTitle" 
                  type="text" 
                  className="issue-input" 
                  placeholder="Title ..." 
                />
              </div>
              <div className="top-form-group">
                <div className="input-title">Author</div>
                <select name="" id="author-select" className="issue-input">
                  <option value="sunny@gmail.com">Sunny</option>
                  <option value="tony@gmail.com">Tony</option>
                </select>
              </div>
              <div className="top-form-group">
                <div className="input-title">Severity</div>
                <select name="" id="severity-select" className="issue-input">
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div className="top-form-group wrap-submit-btn">
                <button type="submit" className="btn btn-primary">Add</button>
              </div>
            </div>
          </form>

          <div className="main-feature">
            <div className="main-feature-group">
              <div className="list-feature-search-field">
                <h2 className="list-name">List Issue</h2>
                <input 
                  type="text" 
                  id="search-box" 
                  className="search-box" 
                  placeholder="Search by description" 
                  autoComplete="off" 
                />
              </div>
            </div>
                <IssueList />
            <div className="filter-sort-container">
              <div className="list-feature-filter">
                <span className="feature-label">Filter:</span>
                <div className="group-btn">
                  <button className="btn filter-status-btn--all">All</button>
                  <button className="btn filter-status-btn--open">Open</button>
                  <button className="btn filter-status-btn--close">Close</button>
                </div>
              </div>
              
              <div className="list-feature-sort">
                <span className="feature-label">Order By:</span>
                <select id="sort-value">
                  <option value="">Choose...</option>
                  <option value="asc">ASC</option>
                  <option value="desc">DESC</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        <section className="issue-list">
          <ul id="issuesList" className="issue-list__list">
            <li className="issue-list-item">
              <div className="list-item-header">
                <span className="list-item-title">1</span>
                <span className="list-item-status">new</span>
              </div>
              <div className="list-item-content">
                <h3 className="issue-name">delectus aut autem</h3>
                <span className="list-item-severity">low</span>
                <div className="list-item-group-btn">
                  <button className="btn btn--close">Close</button>
                  <button className="btn btn--delete">Delete</button>
                </div>
              </div>
            </li>

            <li className="issue-list-item">
              <div className="list-item-header">
                <span className="list-item-title">2</span>
                <span className="list-item-status">new</span>
              </div>
              <div className="list-item-content">
                <h3 className="issue-name">quis ut nam facilis et officia qui</h3>
                <span className="list-item-severity">low</span>
                <div className="list-item-group-btn">
                  <button className="btn btn--close">Close</button>
                  <button className="btn btn--delete">Delete</button>
                </div>
              </div>
            </li>

            <li className="issue-list-item">
              <div className="list-item-header">
                <span className="list-item-title">3</span>
                <span className="list-item-status">new</span>
              </div>
              <div className="list-item-content">
                <h3 className="issue-name">fugiat veniam minus</h3>
                <span className="list-item-severity">Severity:low</span>
                <div className="list-item-group-btn">
                  <button className="btn btn--close">Close</button>
                  <button className="btn btn--delete">Delete</button>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default App