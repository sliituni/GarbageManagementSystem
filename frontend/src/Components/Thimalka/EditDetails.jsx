import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import { Link } from 'react-router-dom';

export default function EditDetails() {
    const { id } = useParams(); // Retrieve the ID from the URL parameter
    const navigate = useNavigate(); // Initialize useNavigate
    const [formData, setFormData] = useState({
        id: '',
        wasteamount: '',
        date: '',
        wastetype: ''
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:4011/analitics/getanalitics/${id}`); // Use the ID to fetch details
            const data = response.data.analitics;
            setFormData({
                id: data.id,
                wasteamount: data.wasteamount,
                date: data.date,
                wastetype: data.wastetype
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:4011/analitics/updateanalitics/${id}`, formData);
            navigate('/viewanalitics'); // Navigate to /viewanalitics page
        } catch (error) {
            console.error('Error updating data:', error);
            // Handle error
        }
    };

    return (
        <div className='container'>
            <h2>Edit Waste Details</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label className="form-label">ID:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='mb-3'>
                    <label className="form-label">Amount:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="wasteamount"
                        value={formData.wasteamount}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='mb-3'>
                    <label className="form-label">Date:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='mb-3'>
                    <label className="form-label">Waste Type:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="wastetype"
                        value={formData.wastetype}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Edit Details</button>
            </form>
        </div>
    );
}
