import react, { Component } from 'react'
import { NavLink, Outlet, Link } from 'react-router-dom'
import '../css/header.css';
import bootstrap from 'bootstrap'

class Headers extends Component {
  render() {
    return (
      <div id='headerContainer' className="container-fluid  text-white">
        <div className="container">
          <div className="row" id="nav-row">
            <div className="col-6">
              <Link to="/" className="Homepage">
                {' '}
                Homepage
              </Link>
            </div>
            <div id="header_list">
              <nav>
                <NavLink className="NavLink" to="/properties">
                  Buildings
                </NavLink>
                <NavLink className="NavLink" to="/request">
                  Lands
                </NavLink>
                <NavLink className="NavLink" to="/analysis">
                  Analysis
                </NavLink>
                <NavLink className="NavLink" to="/transaction">
                  Transactions
                </NavLink>
                <NavLink className="NavLink" to="/logout">
                  Logout
                </NavLink>
              </nav>
            </div>
            <div id="drop-down">
               <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                     <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Headers
