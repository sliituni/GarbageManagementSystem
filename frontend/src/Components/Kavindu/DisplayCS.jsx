import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayCSPopup from "./DisplayCSPopup";
import { useNavigate } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import Chat from "./Chat";

function DisplayCS() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
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
    <div>
      <Header />
      <div className="container" style={{ paddingTop: "150px", paddingBottom: "50px" }}>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="d-flex justify-content-between align-items-center">
              <div style={{ padding: "10px", marginBottom: "10px" }}>
                <p style={{ color: "#34A853", fontSize: "24px", fontWeight: "bold", marginBottom: "5px", cursor: "pointer", letterSpacing: "5px" }}>OPTION FOR REUSE OVER DISPOSAL</p>
              </div>
              <button className="btn rounded-pill" style={{ width: "200px", background: "#34A853", color: "white" }} onClick={() => navigate("addItems")}>
                <b>Add Items</b>
              </button>
            </div>
            <div className="card" style={{ padding: "20px" }}>
              <div className="row">
                {items.map((item) => (
                  <div key={item._id} className="col-md-4 mb-4">
                    <div className="card h-100" style={{ backgroundColor: "rgba(144, 238, 144, 0.5)" }}>
                      <div className="card-body d-flex flex-column justify-content-between">
                        {/* Display image from Cloudinary */}
                        {item.imageUrl && (
                          <img
                            src={item.imageUrl}
                            alt={item.itemName}
                            style={{ maxWidth: "100%", maxHeight: "300px", cursor: "pointer" }}
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
      </div>
      {CSPopupOpen && (
        <DisplayCSPopup onClose={() => setCSPopupOpen(false)} itemId={selectedItemId} />
      )}
      <Chat />
      <Footer />
    </div>
  );
}

export default DisplayCS;
