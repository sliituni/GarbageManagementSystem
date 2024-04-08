import React from 'react';
import { Link } from 'react-router-dom';

import logo from './img/greenbinlogo.png';

export const PHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundImage: "linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)" }}>
      <div className="container container-fluid">
      <Link to={'/landing'} className="navbar-brand">
      <img src={logo} alt="Logo" width="100" height="100" />
      </Link>
        <center>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <b><a className="nav-link active" aria-current="page" href="/landing#about">Home</a></b>
              </li><span style={{ marginRight: "50px" }}></span>
              <li className="nav-item">
                <b><a className="nav-link active" aria-current="page" href="/landing#gscheadule">Schedule</a></b>
              </li><span style={{ marginRight: "50px" }}></span>
              <li className="nav-item">
                <b><a className="nav-link active" aria-current="page" href="/landing#map">Map</a></b>
              </li><span style={{ marginRight: "50px" }}></span>
              <li className="nav-item">
                <b>
                <Link to={'/cs/main'} className="nav-link active" aria-current="page">
                Community Swap
                </Link>
                </b>
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
          <Link to={"/"} type="button" className="btn rounded-pill" style={{ width: '150px', background:'#34A853', color:'white' }}>
            <b>Sign out</b>
          </Link>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};
