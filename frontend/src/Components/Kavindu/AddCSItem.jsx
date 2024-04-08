import React, { useState } from "react";
import axios from "axios";
// import { Image } from 'cloudinary-react';
import { useNavigate } from 'react-router-dom';
import { Header } from "../Header";
import { Footer } from "../Footer";

function AddCSItem() {
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [itemName, setItemName] = useState("");
  const [itemCondition, setItemCondition] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [contactError, setContactError] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreviewImage(URL.createObjectURL(file)); // Preview image
  };

  const validateContactNo = () => {
    if (!contactNo.match(/^\d{10}$/)) {
      setContactError("Invalid Contact No format (e.g., 1234567890)");
    } else {
      setContactError("");
    }
  };

  const sendData = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("itemName", itemName);
      formData.append("itemCondition", itemCondition);
      formData.append("contactNo", contactNo);
      formData.append("address", address);

      const response = await axios.post("http://localhost:4011/cs/add", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 200) {
        console.log("Item added successfully!");
        alert("Item added successfully!")
        // Reset form fields after successful submission
        setImage(null);
        setPreviewImage(null);
        setItemName("");
        setItemCondition("");
        setContactNo("");
        setAddress("");
        navigate(-1);
      } else {
        console.error("Failed to add item");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
    <Header/>
    <div className="container" style={{paddingTop:'150px', paddingBottom: '50px'}}>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">Add Items</div><br/>
            <div className="card-body">
              <form onSubmit={sendData}>
                
                <div className="form-group">
                  <label htmlFor="itemName">Item Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="itemName"
                    placeholder="Enter item name"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    required
                  />
                </div><br/>
                <div className="form-group">
                  <label htmlFor="itemCondition">Item Condition:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="itemCondition"
                    placeholder="Enter item Condition"
                    value={itemCondition}
                    onChange={(e) => setItemCondition(e.target.value)}
                    required
                  />
                </div><br/>
                <div className="form-group">
                  <label htmlFor="contactNo">Contact No:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="contactNo"
                    placeholder="Enter contact number"
                    value={contactNo}
                    onChange={(e) => setContactNo(e.target.value)}
                    onBlur={validateContactNo}
                    required
                  />
                  {contactError && <span style={{ color: 'red' }}>{contactError}</span>}
                </div><br/>
                <div className="form-group">
                  <label htmlFor="address">Address:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Enter address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div><br/>
                <div className="form-group">
                  <label htmlFor="image">Image:</label><br/>
                  <input
                    type="file"
                    className="form-control-file"
                    id="image"
                    accept="image/*"
                    onChange={handleImageUpload}
                    required
                  />
                </div><br/>
                {previewImage && (
                  <div>
                    <img
                      src={previewImage}
                      alt="Preview"
                      style={{ maxWidth: "300px", maxHeight: "300px" }}
                    />
                  </div>
                )}
                <button type="submit" className="btn rounded-pill" style={{ background:'#34A853', color:'white', width: '150px' }}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default AddCSItem;
