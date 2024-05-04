import React, { useState, useEffect } from 'react';
import axios from 'axios';
import user from './img/user.png'; // Default user image
import UpdatePopup from './UpdatePopup';
import { PHeader } from '../PHeader';
import { Footer } from '../Footer';
import { Button, Snackbar } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import DisplayCSPopup from "../Kavindu/DisplayCSPopup";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [imageUrl, setImageUrl] = useState(user);
  const [showUpdatePopup, setShowUpdatePopup] = useState(false);
  const [deleteAlertOpen, setDeleteAlertOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const [CSPopupOpen, setCSPopupOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const fetchUserDetails = async () => {
    try {
      const userId = localStorage.getItem('userId');
      const response = await axios.get(`http://localhost:4011/user/getUser/${userId}`);
      setUserDetails(response.data.user);
      setImageUrl(response.data.user.imageUrl || user); // Use fetched image or default
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user details:', error.message);
    }
  };

  const deleteUser = async () => {
    try {
      const userId = localStorage.getItem('userId');
      await axios.delete(`http://localhost:4011/user/deleteUser/${userId}`);
      localStorage.removeItem('userId');
      window.location.href = '/';
    } catch (error) {
      console.error('Error deleting user:', error.message);
    }
  };

  const handleDeleteConfirm = () => {
    setDeleteAlertOpen(true);
  };

  const handleDeleteCancel = () => {
    setDeleteAlertOpen(false);
  };

  const openUpdatePopup = () => {
    setShowUpdatePopup(true);
  };

  const closeUpdatePopup = () => {
    setShowUpdatePopup(false);
  };

  const openCSPopup = (itemId) => {
    setSelectedItemId(itemId);
    setCSPopupOpen(true);
  };

  const deleteItem = async (itemId) => {
    // Display confirmation dialog
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:4011/cs/delete/${itemId}`);
      // Remove the deleted item from the state
      setItems(items.filter((item) => item._id !== itemId));
      console.log("Item deleted successfully");
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const response = await axios.get(`http://localhost:4011/cs/getByEmail/${userDetails.email}`);
        setItems(response.data.items);
      } catch (error) {
        console.error("Error:", error);
      }
    };
  
    if (userDetails) {
      fetchItems();
    }
  }, [userDetails]);

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <div>
      <PHeader />
      <div className='container' style={{ paddingTop: '150px', paddingBottom: '200px' }}>
        <div className='row'>
          <div className='col-sm-6' style={{ marginLeft: '-100px', paddingLeft: '200px'}}>
            <img src={imageUrl} alt='user' width="400" height="400" style={{ borderRadius: '200px'}} />
          </div>
          <div className='col-sm-6'>
            <h2><b>Profile Details</b></h2>
            <hr style={{ border: "1px solid" }} />
            <br />
            {loading ? (
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress color="success"/>
              </div>
            ) : (
              userDetails && (
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
              )
            )}
            <div className='row'>
              <div className='col-sm-6'>
                <Button variant="contained" className='rounded-pill' style={{ width: '300px', backgroundColor: '#34A853', color: 'white' }} onClick={openUpdatePopup}>
                  <b>Update Details</b>
                </Button>
              </div>
              <div className='col-sm-6'>
                <Button variant="outlined" color="error" className='rounded-pill' style={{ width: '300px'}} onClick={handleDeleteConfirm}>
                  <b>Delete Account</b>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {showUpdatePopup && <UpdatePopup userDetails={userDetails} onClose={closeUpdatePopup} />}
      <Snackbar
        open={deleteAlertOpen}
        message="Are you sure you want to delete your account?"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        action={
          <>
            <Button color="success" size="small" onClick={handleDeleteCancel}>
              Cancel
            </Button>
            <Button color="error" size="small" onClick={deleteUser}>
              Delete
            </Button>
          </>
        }
      />
      <div className="container" style={{paddingTop:"20px"}}>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h2>My Posts</h2>
            <div className="card" style={{ padding: "20px" }}>
              <div className="row">
                {items.map((item) => (
                  <div key={item._id} className="col-md-4 mb-4">
                    <div className="card h-100" style={{ backgroundColor: "rgba(144, 238, 144, 0.5)" }}>
                      <div className="card-body d-flex flex-column justify-content-between">
                        {item.imageUrl && (
                          <img
                            src={item.imageUrl}
                            alt={item.itemName}
                            style={{ maxWidth: "100%", maxHeight: "300px", cursor: "pointer" }}
                            onClick={() => openCSPopup(item._id)}
                          />
                        )}
                        <h5 className="card-title">{item.itemName}</h5>
                        <div className="d-flex justify-content-between">
                          <button
                            className="btn btn-primary mr-2"
                            onClick={() => navigate(`/cs/userp/edit/${item._id}`)}
                          >
                            Edit
                          </button>
                          <button className="btn btn-danger" onClick={() => deleteItem(item._id)}>
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {CSPopupOpen && <DisplayCSPopup onClose={() => setCSPopupOpen(false)} itemId={selectedItemId} />}
    </div>
  );
};

export default UserProfile;
