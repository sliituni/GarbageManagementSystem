import React, { useState, useEffect } from 'react';
import axios from 'axios';
import user from './img/user.png';
import UpdatePopup from './UpdatePopup';
import { PHeader } from '../PHeader';
import { Footer } from '../Footer';

const UserProfile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [showUpdatePopup, setShowUpdatePopup] = useState(false);

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

  const deleteUser = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete your account?');
    if (confirmDelete) {
      try {
        const userId = localStorage.getItem('userId');
        await axios.delete(`http://localhost:4011/user/deleteUser/${userId}`);
        // Clear user details from local storage
        localStorage.removeItem('userId');
        // Redirect to landing page
        window.location.href = '/';
      } catch (error) {
        console.error('Error deleting user:', error.message);
      }
    }
  };

  const openUpdatePopup = () => {
    setShowUpdatePopup(true);
  };

  const closeUpdatePopup = () => {
    setShowUpdatePopup(false);
  };

  return (
    <div>
      <PHeader />
      <div className='container' style={{ paddingTop: '150px' , paddingBottom: '200px'}}>
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
                <button type='button' className='btn rounded-pill' style={{ width: '300px', backgroundColor: '#34A853', color: 'white' }} onClick={openUpdatePopup}>
                  <b>Update Details</b>
                </button>
              </div>
              <div className='col-sm-6'>
                <button type='button' className='btn btn-outline-danger rounded-pill' style={{ width: '300px' }} onClick={deleteUser}>
                  <b>Delete Account</b>
                </button>
              </div>
            </div>
          </div>
        </div>
        {showUpdatePopup && <UpdatePopup userDetails={userDetails} onClose={closeUpdatePopup} />}
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
