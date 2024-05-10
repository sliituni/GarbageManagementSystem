import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayCSPopup from "./DisplayCSPopup";
import { Typography, IconButton, Snackbar, Button } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import AHeader from "../AHeader";

function DisplayCSUserP() {
  const [items, setItems] = useState([]);
  const [user, setUser] = useState(null); // Add user state
  const navigate = useNavigate();
  const [CSPopupOpen, setCSPopupOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false); // State for delete confirmation

  const openCSPopup = (itemId) => {
    setSelectedItemId(itemId);
    setCSPopupOpen(true);
  };

  const deleteItem = async (itemId) => {
    setSelectedItemId(itemId);
    setDeleteConfirmationOpen(true); // Open delete confirmation dialog
  };

  const confirmDeleteItem = async () => {
    try {
      await axios.delete(`http://localhost:4011/cs/delete/${selectedItemId}`);
      // Remove the deleted item from the state
      setItems(items.filter((item) => item._id !== selectedItemId));
      console.log("Item deleted successfully");
    } catch (error) {
      console.error("Error deleting item:", error);
    }
    setDeleteConfirmationOpen(false); // Close delete confirmation dialog
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

    // Simulating user authentication
    setUser({ userId: "1", username: "exampleUser", email: "user@example.com" });
  }, []);

  return (
    <div>
      <AHeader />
      <div className="container" style={{ paddingTop: "150px" }}>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h2>User Postings</h2>
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
                        <Typography variant="h6" component="h2" gutterBottom>
                          {item.itemName}
                        </Typography>

                        <div className="d-flex justify-content-end">
                          <IconButton color="error" onClick={() => deleteItem(item._id)}>
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
        {/* Delete confirmation dialog */}
        <Snackbar
          open={deleteConfirmationOpen}
          message="Are you sure you want to delete this item?"
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
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
      </div>
    </div>
  );
}

export default DisplayCSUserP;
