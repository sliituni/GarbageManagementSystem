import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import webtag from './img/webtag1.png';

export default function Addana() {
    const [formData, setFormData] = useState({
        id: '',
        wasteamount: '',
        date: '',
        wastetype: ''
    });

    const navigate = useNavigate();
    const { id, wasteamount, date, wastetype } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:4011/analitics/addanalitics', formData);
            navigate('/viewanalitics');
            setFormData({
                id: '',
                wasteamount: '',
                date: '',
                wastetype: ''
            });
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <div className='container' style={{ marginTop: '200px' }}>
            <div className='row'>
                <div className='col-sm-6'>
                    <h2>Add Waste details</h2>
                    <form onSubmit={onSubmit}>
                        <div className='mb-3'>
                            <label className="form-label">ID:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="id"
                                value={id}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div className='mb-3'>
                            <label className="form-label">Amount(kg):</label>
                            <input
                                type="text"
                                className="form-control"
                                name="wasteamount"
                                value={wasteamount}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div className='mb-3'>
                            <label className="form-label">Date:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="date"
                                value={date}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div className='mb-3'>
                            <label className="form-label">Waste Type:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="wastetype"
                                value={wastetype}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div>
                            <button type="submit" className="btn btn-success form-control"><b>Add details</b></button>
                        </div><br />
                    </form>
                </div>
                <div className='col-sm-6'>
                    <img src={webtag} alt='login' width="500" height="300" style={{ paddingLeft: "200px" }} />
                </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br />
        </div>
    )
}
