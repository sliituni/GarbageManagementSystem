import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
        <div className='container'>
            <h2>Waste Details</h2>
            {error && <div className="alert alert-danger" role="alert">{error}</div>}
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Amount(kg)</th>
                        <th>Date</th>
                        <th>Waste Type</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {details.map(detail => (
                        <tr key={detail._id}>
                            <td>{detail.id}</td>
                            <td>{detail.wasteamount}</td>
                            <td>{detail.date}</td>
                            <td>{detail.wastetype}</td>
                            <td>
                                <button className='btn btn-danger' onClick={() => handleDelete(detail._id)}>Delete</button>
                                <span style={{ marginLeft: '5px' }} /> {/* Add a small space between buttons */}
                                <Link to={`/updateanalitics/${detail._id}`} className='btn btn-primary'>Edit</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
