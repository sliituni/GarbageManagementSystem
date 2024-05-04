import React, { useState } from 'react';
import axios from 'axios';

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
            <div>
                <label className="form-label">Full Name : </label>
                <input className="form-control" type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} />
            </div>
            <div>
                <label className="form-label">Address : </label>
                <input className="form-control" type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div>
                <label className="form-label">Email : </label>
                <input className="form-control" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label className="form-label">Contact No : </label>
                <input className="form-control" type="text" value={contactno} onChange={(e) => setContactNo(e.target.value)} />
            </div>
            <div>
                <label className="form-label">New Password : </label>
                <input className="form-control" type="text" placeholder="New Password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <br/>
            <button type='button' className='btn btn-success rounded-pill' style={{ width: '200px',marginRight: '10px' }} onClick={updateProfile}><b>Update</b></button>
            <button type='button' className='btn btn-outline-danger rounded-pill' style={{ width: '200px' }} onClick={onClose}><b>Cancel</b></button>
        </div>
    );
};

export default UpdatePopup;
