import React, { useState, useEffect } from 'react';
import axios from 'axios';
import user from './img/user.png';
import UpdatePopup from './UpdatePopup';
//
import DisplayCSPopup from "../Kavindu/DisplayCSPopup";
import { useNavigate } from "react-router-dom";

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

const openUpdatePopup = () => {
  setShowUpdatePopup(true);
};

const closeUpdatePopup = () => {
  setShowUpdatePopup(false);
};

//
const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const [CSPopupOpen, setCSPopupOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

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
              <button type='button' className='btn btn-success rounded-pill' style={{ width: '300px' }} onClick={openUpdatePopup}>
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
      {showUpdatePopup && <UpdatePopup userDetails={userDetails} onClose={closeUpdatePopup} />}

      {/* cs posts */}
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
      {CSPopupOpen && <DisplayCSPopup onClose={() => setCSPopupOpen(false)} itemId={selectedItemId} />}
    </div>
      {/* end cs post */}
    </div>
  );
};

export default UserProfile;
