import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

import logo from './img/greenbinlogo.png';

export default function AHeader() {
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
                <b><a className="nav-link active" aria-current="page" href="/usermng">Manage User</a></b>
              </li><span style={{ marginRight: "50px" }}></span>
              <li className="nav-item">
                <b>
                <Link to={'/viewanalitics'} className="nav-link active" aria-current="page">Analitics Details</Link>
                </b>
              </li><span style={{ marginRight: "50px" }}></span>
              <li className="nav-item">
                <b><a className="nav-link active" aria-current="page" href="">Inquires</a></b>
              </li><span style={{ marginRight: "50px" }}></span>
              <li className="nav-item">
                <b>
                  <Link to={'/cs/userp'} className="nav-link active" aria-current="page">
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
          <Button variant="contained" className='rounded-pill' style={{ width: '150px', background: '#34A853', color: 'white' }} onClick={signOut}>
            <b>Sign out</b>
          </Button>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  )
}
