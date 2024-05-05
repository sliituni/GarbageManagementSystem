import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function Alert(props) {
    return <MuiAlert elevation={1} variant="filled" {...props} />;
}

const UpdatePopup = ({ userDetails, onClose }) => {
    const [fullname, setFullname] = useState(userDetails.fullname);
    const [email, setEmail] = useState(userDetails.email);
    const [contactno, setContactNo] = useState(userDetails.contactno);
    const [address, setAddress] = useState(userDetails.address);
    const [password, setPassword] = useState(userDetails.password);
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const updateProfile = async () => {
        try {
            const response = await axios.put(`http://localhost:4011/user/updateProfile/${userDetails._id}`, {
                fullname,
                email,
                contactno,
                address,
                password
            });
            console.log(response.data);
            setOpenSnackbar(true); // Open the snackbar after successful update
            onClose(); // Close the popup after successful update
        } catch (error) {
            console.error('Error updating user profile:', error.message);
        }
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <div className="update-popup" style={{ marginTop: '100px' }}>
            <h2>Update Profile</h2>
            <TextField
                label="Full Name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                variant="filled"
                color="success"
                fullWidth
                margin="normal"
            />
            <TextField
                label="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                variant="filled"
                color="success"
                fullWidth
                margin="normal"
            />
            <TextField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="filled"
                color="success"
                fullWidth
                margin="normal"
            />
            <TextField
                label="Contact No"
                value={contactno}
                onChange={(e) => setContactNo(e.target.value)}
                variant="filled"
                color="success"
                fullWidth
                margin="normal"
            />
            <TextField
                label="New Password"
                type="text"
                value={password}
                placeholder="New Password"
                onChange={(e) => setPassword(e.target.value)}
                variant="filled"
                color="success"
                fullWidth
                margin="normal"
            />
            <br />
            <Button variant="contained" className='rounded-pill' style={{ width: '200px', marginRight: '10px', backgroundColor: '#34A853', color: 'white' }} onClick={updateProfile}>
                <b>Update</b>
            </Button>
            <Button variant="outlined" color="error" className='rounded-pill' style={{ width: '200px' }} onClick={onClose}>
                <b>Cancel</b>
            </Button>
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="success">
                    Profile updated successfully!
                </Alert>
            </Snackbar>
        </div>
    );
};

export default UpdatePopup;
