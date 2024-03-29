import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayCSPopup from "./DisplayCSPopup";
import { useNavigate } from "react-router-dom";

function DisplayCSUserP() {
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
        const response = await axios.get("http://localhost:4011/cs/");
        setItems(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10">
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
                          style={{ maxWidth: "100%", maxHeight: "200px", cursor: "pointer" }}
                          onClick={() => openCSPopup(item._id)}
                        />
                      )}
                      <h5 className="card-title">{item.itemName}</h5>
                      {/* Edit and delete buttons */}
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
  );
}

export default DisplayCSUserP;
