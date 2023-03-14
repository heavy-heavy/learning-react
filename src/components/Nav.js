import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


export default function Nav(props) {
 
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button" 
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.About}
                </Link>
              </li>
              
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="/"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
            <div className="btn-group mx-2">
                <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  color platte
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item"  type="button" onClick={props.blueMode} style={{backgroundColor: 'blue',color:'white'}}>blue</a></li>
                  {/* <li><a className="dropdown-item"  style={{backgroundColor: 'indigo',color:'white'}}>indigo</a></li>
                  <li><a className="dropdown-item"  style={{backgroundColor: 'purple',color:'white'}}>purple</a></li>
                  <li><a className="dropdown-item"  style={{backgroundColor: 'pink',color:'white'}}>pink</a></li>
                  <li><a className="dropdown-item"  style={{backgroundColor: 'red',color:'white'}}>red</a></li> */}
                             
                  
                </ul>
              </div>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`} >
              <input
                className="form-check-input" onClick={props.toggleMode}
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label className="form-check-label d-flex justify-content-end" htmlFor="flexSwitchCheckDefault">
                Enable {props.mode==='light'?'dark':'light'} mode
              </label>
            </div>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            
          </div>
        </div>
      </nav>
    </>
  );
}

Nav.propTypes = {
  title: PropTypes.string.isRequired,
  About: PropTypes.string.isRequired,
};

Nav.defaultProps = { title: "set title here", About: "About US" };
