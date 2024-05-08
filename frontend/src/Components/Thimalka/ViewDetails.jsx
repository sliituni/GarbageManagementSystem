import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AHeader from '../AHeader';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function ViewDetails() {
    const [details, setDetails] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:4011/analitics/analitics');
            setDetails(response.data);
        } catch (error) {
            setError('Error fetching data from server. Please try again later.');
            console.error('Error fetching data:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:4011/analitics/deleteanalitics/${id}`);
            fetchData();
        } catch (error) {
            setError('Error deleting data from server. Please try again later.');
            console.error('Error deleting data:', error);
        }
    };

    return (
        <div className='container' style={{ paddingTop: '150px' }}>
            <AHeader />
            <h2>Waste Details</h2>
            <div style={{ textAlign: 'right', paddingBottom: '10px' }}>
                <Button component={Link} to='/addanalitics' variant="outlined" color='success'>
                    Add Waste Details
                </Button>
                <span style={{ marginLeft: '5px' }} />
                <Button component={Link} to='/mdtable' variant="outlined" color='success'>
                    Edit Monthly Details
                </Button>
            </div>
            {error && <div className="alert alert-danger" role="alert">{error}</div>}
            <table className='table'>
                <thead>
                    <tr>
                        <th>Amount(kg)</th>
                        <th>Date</th>
                        <th>Waste Type</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {details.map(detail => (
                        <tr key={detail._id}>
                            <td>{detail.wasteamount}</td>
                            <td>{detail.date}</td>
                            <td>{detail.wastetype}</td>
                            <td>
                                <Button component={Link} to={`/updateanalitics/${detail._id}`} variant="contained" style={{ background: '#34A853', color: 'white' }}>
                                    <EditIcon/>
                                </Button>
                                <span style={{ marginLeft: '5px' }} />
                                <Button onClick={() => handleDelete(detail._id)} variant="outlined" color='error'><DeleteIcon /></Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
