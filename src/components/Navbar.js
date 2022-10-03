import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#
                .0">About</a>
              </li>
            </ul>
            <button type="button"  onClick={()=>{props.toggleMode('primary')}} className={`btn btn-outline-${props.mode === 'primary'? 'light': 'primary'} mx-2`}>Success</button>
            <button type="button"  onClick={()=>{props.toggleMode('success')}} className={`btn btn-outline-${props.mode === 'success'? 'light': 'success'} mx-2`}>Success</button>
            <button type="button"  onClick={()=>{props.toggleMode('danger')}} className={`btn btn-outline-${props.mode === 'danger'? 'light': 'danger'} mx-2`}>Danger</button>
            <button type="button"  onClick={()=>{props.toggleMode('warning')}} className={`btn btn-outline-${props.mode === 'warning'? 'light': 'warning'} mx-2`}>Warning</button>
            <div className={`form-check form-switch text-${props.mode === 'light'? 'dark': 'light'}`}>
              <input className="form-check-input" onClick={()=>{props.toggleMode('light')}} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?"Enable DarkMode":"Enable LightMode"}</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}

// Specifies the default values for props:
Navbar.defaultProps = {
  title: 'Textutils'
};

export default Navbar
