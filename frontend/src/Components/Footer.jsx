import React from 'react';
import { Link } from 'react-router-dom';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

export const Footer = () => {
  return (
    <div >
      <footer className="footer mt-auto py-3" style={{ bottom: 0, width: '100%', backgroundColor: '#37563F', boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.1)' }}>
        <div className="container" style={{paddingTop: '20px'}}>
          <div className='row' style={{color: 'white'}}>
            <div className='col-md-4'>
              <h1>Green BIN</h1>
              <Link to={'#'} className='btn rounded-pill' style={{color: 'white'}}><PhoneIcon/></Link>
              <span style={{ marginRight: "20px" }}></span>
              <Link to={'#'} className='btn rounded-pill' style={{color: 'white'}}><WhatsAppIcon/></Link>
              <span style={{ marginRight: "20px" }}></span>
              <Link to={'#'} className='btn rounded-pill' style={{color: 'white'}}><EmailIcon/></Link>
              <br/><br/>
              <p>All Right Reserved for <b>GreenBIN</b></p>
            </div>
            <div className='col-md-4'>
              <h5>HOW DOSE IT WORKS</h5>
              <p>User Review</p>
              <p>About US</p>
              <p>Blog</p>
              <p>FAQ</p>
            </div>
            <div className='col-md-4'>
              <h5>SERVICES</h5>
              <p>Garbage Collection</p>
              <p>Location</p>
              <p>Schedule</p>
              <p>Community Swap</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
