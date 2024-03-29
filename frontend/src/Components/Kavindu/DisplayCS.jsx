import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayCSPopup from "./DisplayCSPopup";
import { useNavigate } from "react-router-dom";

function DisplayCS() {

  const [items, setItems] = useState([]);
  const navigate = useNavigate()
  const [CSPopupOpen, setCSPopupOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const openCSPopup = (itemId) => {
    setSelectedItemId(itemId);
    setCSPopupOpen(true);
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
          <h2 className="py-4">Community Swap</h2>
          <div className="d-flex justify-content-between align-items-center">
            {/* <div>
              <p style={{ color: 'green' }}>&nbsp;&nbsp;Option for</p>
              <p style={{ color: 'red' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reuse</p>
              <p style={{ color: 'green' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Over Disposal</p>
            </div> */}
            <div style={{ padding: '10px', marginBottom: '10px' }}>
              <p style={{ color: 'orange', fontSize: '24px', fontWeight: 'bold', marginBottom: '5px', cursor: 'pointer' }}>&nbsp;&nbsp;Option for Reuse Over Disposal</p>
            </div>

            <button className="btn btn-success">
              <span class="badge bg-secondary" onClick={() => navigate('addItems')}>+ Add Items</span>
            </button>
          </div>
          <div className="card" style={{ padding: '20px' }}>
            <div className="row">
              {items.map((item) => (
                <div key={item._id} className="col-md-4 mb-4">
                  <div className="card h-100" style={{ backgroundColor: 'rgba(144, 238, 144, 0.5)' }}>
                    <div className="card-body d-flex flex-column justify-content-between">
                      {/* Display image from Cloudinary */}
                      {item.imageUrl && (
                        <img
                          src={item.imageUrl}
                          alt={item.itemName}
                          style={{ maxWidth: "100%", maxHeight: "200px", cursor: "pointer" }}
                          onClick={() => openCSPopup(item._id)}
                        />
                      )}
                      <h5 className="card-title">{item.itemName}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {CSPopupOpen && (
        <DisplayCSPopup onClose={() => setCSPopupOpen(false)} itemId={selectedItemId} />
      )}
    </div>
  );
}

export default DisplayCS;
