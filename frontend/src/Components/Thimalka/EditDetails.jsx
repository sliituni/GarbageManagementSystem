import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function EditDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        wasteamount: '',
        date: '',
        wastetype: ''
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:4011/analitics/getanalitics/${id}`);
            const data = response.data.analitics;
            setFormData({
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
            navigate('/viewanalitics');
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    return (
        <div className='container mt-5'>
            <h2>Edit Waste Details</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <TextField
                        label="Amount"
                        variant="outlined"
                        name="wasteamount"
                        color='success'
                        fullWidth
                        value={formData.wasteamount}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='mb-3'>
                    <TextField
                        label="Date"
                        variant="outlined"
                        name="date"
                        color='success'
                        fullWidth
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='mb-3'>
                    <TextField
                        label="Waste Type"
                        variant="outlined"
                        name="wastetype"
                        color='success'
                        fullWidth
                        value={formData.wastetype}
                        onChange={handleChange}
                        required
                    />
                </div>
                <Button type="submit" variant="contained" color="success">
                    Edit Details
                </Button>
            </form>
        </div>
    );
}
