import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const UpdatePopup = ({ userDetails, onClose }) => {
    const [fullname, setFullname] = useState(userDetails.fullname);
    const [email, setEmail] = useState(userDetails.email);
    const [contactno, setContactNo] = useState(userDetails.contactno);
    const [address, setAddress] = useState(userDetails.address);
    const [password, setPassword] = useState('');

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
            onClose(); // Close the popup after successful update
        } catch (error) {
            console.error('Error updating user profile:', error.message);
        }
    };

    return (
        <div className="update-popup" style={{ marginTop: '100px' }}>
            <h2>Update Profile</h2>
            <TextField
                label="Full Name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <TextField
                label="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <TextField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <TextField
                label="Contact No"
                value={contactno}
                onChange={(e) => setContactNo(e.target.value)}
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <TextField
                label="New Password"
                type="password"
                placeholder="New Password"
                onChange={(e) => setPassword(e.target.value)}
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <br />
            <Button variant="contained" className='rounded-pill' style={{ width: '200px', marginRight: '10px' , backgroundColor: '#34A853', color: 'white'}} onClick={updateProfile}>
                <b>Update</b>
            </Button>
            <Button variant="outlined" color="error" className='rounded-pill' style={{ width: '200px' }} onClick={onClose}>
                <b>Cancel</b>
            </Button>
        </div>
    );
};

export default UpdatePopup;
