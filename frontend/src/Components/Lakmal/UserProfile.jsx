import React, { useState, useEffect } from 'react';
import axios from 'axios';
import user from './img/user.png'; // Default user image
import UpdatePopup from './UpdatePopup';
import { PHeader } from '../PHeader';
import { Footer } from '../Footer';
import { Button, Snackbar } from '@mui/material';
import { Typography, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import CircularProgress from '@mui/material/CircularProgress';
import DisplayCSPopup from "../Kavindu/DisplayCSPopup";
import { useNavigate } from "react-router-dom";
import Contact from './Contact';

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
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [selectedItemToDelete, setSelectedItemToDelete] = useState(null);

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

      // Fetch all items associated with the user
      const response = await axios.get(`http://localhost:4011/cs/getByEmail/${userDetails.email}`);
      const userItems = response.data.items;

      // Delete each item associated with the user
      await Promise.all(userItems.map(async (item) => {
        await axios.delete(`http://localhost:4011/cs/delete/${item._id}`);
      }));

      // Once all items are deleted, delete the user's account
      await axios.delete(`http://localhost:4011/user/deleteUser/${userId}`);
      
      // Remove user id from local storage
      localStorage.removeItem('userId');

      // Redirect to home page or perform any other action
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

  const deleteItem = (itemId) => {
    setSelectedItemToDelete(itemId);
    setDeleteConfirmationOpen(true);
  };

  const confirmDeleteItem = async () => {
    try {
      await axios.delete(`http://localhost:4011/cs/delete/${selectedItemToDelete}`);
      // Remove the deleted item from the state
      setItems(items.filter((item) => item._id !== selectedItemToDelete));
      console.log("Item deleted successfully");
    } catch (error) {
      console.error("Error deleting item:", error);
    }
    setDeleteConfirmationOpen(false);
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
      <div className='container' style={{ paddingTop: '150px', paddingBottom: '100px' }}>
        <div className='row'>
          <div className='col-sm-6' style={{ marginLeft: '-100px', paddingLeft: '200px' }}>
            <img src={imageUrl} alt='user' width="400" height="400" style={{ borderRadius: '200px' }} />
          </div>
          <div className='col-sm-6'>
            <h2><b>Profile Details</b></h2>
            <hr style={{ border: "1px solid" }} />
            <br />
            {loading ? (
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress color="success" />
              </div>
            ) : (
              userDetails && (
                <div style={{ fontSize: '20px' }}>
                  <p><b>Name:</b> {userDetails.fullname}</p>
                  <p><b>Address:</b> {userDetails.address}</p>
                  <p><b>Email:</b> {userDetails.email}</p>
                  <p><b>Contact No:</b> {userDetails.contactno}</p>
                </div>
              )
            )}
            <div className='row'>
              <div className='col-sm-6'>
                <Button variant="contained" className='rounded-pill' style={{ width: '300px', backgroundColor: '#34A853', color: 'white' }} onClick={openUpdatePopup}>
                  <b>Update Details</b>
                </Button>
              </div>
              <div className='col-sm-6'>
                <Button variant="outlined" color="error" className='rounded-pill' style={{ width: '300px' }} onClick={handleDeleteConfirm}>
                  <b>Delete Account</b>
                </Button>
              </div>
            </div>
          </div>
        </div>
        {showUpdatePopup && <UpdatePopup userDetails={userDetails} onClose={closeUpdatePopup} />}
      </div>
      <Contact />
      <Snackbar
        open={deleteAlertOpen}
        message="Are you sure you want to delete your account? "
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
      {/* posts */}
      {items.length > 0 && (
        <div className="container" style={{ paddingTop: "20px" }}>
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
                          <Typography variant="h6" component="h2" gutterBottom>{item.itemName}</Typography>
                          <div className="d-flex justify-content-end">
                            <IconButton color="success" onClick={() => navigate(`/cs/userp/edit/${item._id}`)}>
                              <EditIcon />
                            </IconButton>
                            <IconButton color="error" variant="outlined" onClick={() => deleteItem(item._id)}>
                              <DeleteIcon />
                            </IconButton>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {CSPopupOpen && <DisplayCSPopup onClose={() => setCSPopupOpen(false)} itemId={selectedItemId} />}
        </div>
      )}
      {/* Snackbar for item deletion confirmation */}
      <Snackbar
        open={deleteConfirmationOpen}
        message="Are you sure you want to delete this item?"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        action={
          <>
            <Button color="success" size="small" onClick={() => setDeleteConfirmationOpen(false)}>
              Cancel
            </Button>
            <Button color="error" size="small" onClick={confirmDeleteItem}>
              Delete
            </Button>
          </>
        }
      />
      <br />
      <Footer />
    </div>
  );
};

export default UserProfile;
