import React, { useState, useEffect } from 'react';
import axios from 'axios';
import user from './img/user.png';

const UserProfile = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    try {
      const userId = localStorage.getItem('userId');
      const response = await axios.get(`http://localhost:4011/user/getUser/${userId}`);
      setUserDetails(response.data.user);
    } catch (error) {
      console.error('Error fetching user details:', error.message);
    }
  };

  return (
    <div className='container' style={{ marginTop: '100px' }}>
      <div className='row'>
        <div className='col-sm-6' style={{ marginLeft: '-100px' }}>
          <img src={user} alt='user' width="600" height="400" style={{ paddingLeft: "200px" }} />
        </div>
        <div className='col-sm-6'>
          <h2><b>Profile Details</b></h2>
          <hr style={{ border: "1px solid" }} />
          <br />
          {userDetails && (
            <>
              <h5>Name: {userDetails.fullname}</h5>
              <br />
              <h5>Address: {userDetails.address}</h5>
              <br />
              <h5>Email: {userDetails.email}</h5>
              <br />
              <h5>Contact No: {userDetails.contactno}</h5>
              <br />
            </>
          )}
          {!userDetails && (
            <p>Loading user details...</p>
          )}
          <div className='row'>
            <div className='col-sm-6'>
              <button type='button' className='btn btn-success rounded-pill' style={{ width: '300px' }}>
                <b>Update Details</b>
              </button>
            </div>
            <div className='col-sm-6'>
              <button type='button' className='btn btn-outline-danger rounded-pill' style={{ width: '300px' }}>
                <b>Delete Account</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
