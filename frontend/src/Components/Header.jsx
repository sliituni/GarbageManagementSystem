import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import logo from './img/greenbinlogo.png';

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body">
      <div className="container container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" width="100" height="100" />
        </a>
        <center>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <b><a className="nav-link active" aria-current="page" href="#">Home</a></b>
              </li><span style={{ marginRight: "50px" }}></span>
              <li className="nav-item">
                <b><a className="nav-link active" aria-current="page" href="#">Schedule</a></b>
              </li><span style={{ marginRight: "50px" }}></span>
              <li className="nav-item">
                <b><a className="nav-link active" aria-current="page" href="#">Map</a></b>
              </li><span style={{ marginRight: "50px" }}></span>
              <li className="nav-item">
                <b><a className="nav-link active" aria-current="page" href="#">Give Away</a></b>
              </li><span style={{ marginRight: "50px" }}></span>
              <li className="nav-item">
                <b><a className="nav-link active" aria-current="page" href="#">About</a></b>
              </li><span style={{ marginRight: "50px" }}></span>
              <li className="nav-item">
                <b><a className="nav-link active" aria-current="page" href="#">Contact</a></b>
              </li>
            </ul>
          </div>
        </center>
        <div>
          <a href='#' type="button" className="btn btn-success rounded-pill"><b>Sign out</b></a>
          <span style={{ marginRight: "10px" }}></span>
          <a href='#' type="button" className="btn btn-success rounded-pill">
            <FontAwesomeIcon icon={faUser} />
          </a>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};
