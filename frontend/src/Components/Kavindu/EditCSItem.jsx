import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditCSItem() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    itemName: "",
    itemCondition: "",
    contactNo: "",
    address: "",
    imageUrl: "",
  });

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`http://localhost:4011/cs/get/${id}`);
        const { item } = response.data;
        setFormData({
          itemName: item.itemName,
          itemCondition: item.itemCondition,
          contactNo: item.contactNo,
          address: item.address,
          imageUrl: item.imageUrl,
        });
      } catch (error) {
        console.error("Error fetching item:", error);
      }
    };

    fetchItem();
  }, [id]);

  const handleImageUpload = (e) => {
    // Handle image upload
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4011/cs/update/${id}`, formData);
      alert("Item updated successfully");
      navigate(-1); // Navigate back to the previous page
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">Edit Item</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="itemName">Item Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="itemName"
                    placeholder="Enter item name"
                    value={formData.itemName}
                    onChange={(e) => setFormData({ ...formData, itemName: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="itemCondition">Item Condition:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="itemCondition"
                    placeholder="Enter item Condition"
                    value={formData.itemCondition}
                    onChange={(e) => setFormData({ ...formData, itemCondition: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contactNo">Contact No:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="contactNo"
                    placeholder="Enter contact number"
                    value={formData.contactNo}
                    onChange={(e) => setFormData({ ...formData, contactNo: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Enter address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    required
                  />
                </div><br/>
                {/* <div className="form-group">
                  <label htmlFor="image">Image:</label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="image"
                    accept="image/*"
                    onChange={handleImageUpload}
                    required
                  />
                </div> */}
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditCSItem;
