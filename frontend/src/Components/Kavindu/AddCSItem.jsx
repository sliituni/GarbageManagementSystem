import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Header } from "../Header";
import { Footer } from "../Footer";
import { 
  Button,
  TextField,
  Card,
  CardHeader,
  CardContent,
  Container,
  Grid,
  Typography
} from '@mui/material';

function AddCSItem() {
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [itemName, setItemName] = useState("");
  const [itemCondition, setItemCondition] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [contactError, setContactError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
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

  const validateEmail = () => {
    // Regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
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
      formData.append("email", email);
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
        setEmail("");
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
      <Container style={{paddingTop:'150px', paddingBottom: '50px'}}>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={8}>
            <Card>
              <CardHeader title="Add Items" />
              <CardContent>
                <form onSubmit={sendData}>
                  <TextField
                    fullWidth
                    label="Item Name"
                    placeholder="Enter item name"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    required
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    label="Item Condition"
                    placeholder="Enter item condition"
                    value={itemCondition}
                    onChange={(e) => setItemCondition(e.target.value)}
                    required
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    label="Contact No"
                    placeholder="Enter contact number"
                    value={contactNo}
                    onChange={(e) => setContactNo(e.target.value)}
                    onBlur={validateContactNo}
                    error={!!contactError}
                    helperText={contactError}
                    required
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={validateEmail}
                    error={!!emailError}
                    helperText={emailError}
                    required
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    label="Address"
                    placeholder="Enter address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    margin="normal"
                  />
                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={handleImageUpload}
                    required
                  />
                  {previewImage && (
                    <div>
                      <img
                        src={previewImage}
                        alt="Preview"
                        style={{ maxWidth: "300px", maxHeight: "300px" }}
                      />
                    </div>
                  )}
                  <Button
                    type="submit"
                    variant="contained"
                    style={{ background:'#34A853', color:'white', width: '150px' }}
                  >
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer/>
    </div>
  );
}

export default AddCSItem;
