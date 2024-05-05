import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import logo from './img/greenbinlogo.png';

export const Header = () => {
  const signOut = () => {
    localStorage.removeItem('userId');
    window.location.href = "/"; // Redirect to the sign-out route
  };

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
                <b><a className="nav-link active" aria-current="page" href="#about">Home</a></b>
              </li><span style={{ marginRight: "50px" }}></span>
              <li className="nav-item">
                <b><a className="nav-link active" aria-current="page" href="#gscheadule">Schedule</a></b>
              </li><span style={{ marginRight: "50px" }}></span>
              <li className="nav-item">
                <b><a className="nav-link active" aria-current="page" href="#map">Map</a></b>
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
          <Button component={Link} to={"/"} variant="contained" className='rounded-pill' style={{ width: '150px', background:'#34A853', color:'white' }} onClick={signOut}>
            <b>Sign out</b>
          </Button>
          <span style={{ marginRight: "10px" }}></span>
          <IconButton component={Link} to={"/profile"} style={{ background:'#34A853', color:'white' }}>
            <AccountCircleIcon/>
          </IconButton>
        </div>
      </div>
    </nav>
  );
};
