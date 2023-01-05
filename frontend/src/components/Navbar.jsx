import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate()
  const logout = async()=>{
    try {
      await axios.delete('http://localhost:5000/logout');
      navigate('/register')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img alt="logo" src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
        </a>
    
        <a href="/" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a  href="/"className="navbar-item">
            Home
          </a>
    
          <a href="/" className="navbar-item">
            Documentation
          </a>
    
          <div className="navbar-item has-dropdown is-hoverable">
            <a  href="/"className="navbar-link">
              More
            </a>
    
            <div className="navbar-dropdown">
              <a href="/"className="navbar-item">
                About
              </a>
              <a href="/" className="navbar-item">
                Jobs
              </a>
              <a href="/" className="navbar-item">
                Contact
              </a>
              <hr className="navbar-divider"/>
            </div>
          </div>
        </div>
    
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <button className="button is-primary" onClick={logout}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar