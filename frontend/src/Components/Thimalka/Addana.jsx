import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import webtag from './img/webtag1.png';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function Addana() {
    const [formData, setFormData] = useState({
        wasteamount: '',
        date: '',
        wastetype: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const { wasteamount, date, wastetype } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // Clear errors when user modifies input
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const validateForm = () => {
        const errors = {};
        let isValid = true;

        if (!wasteamount.trim()) {
            errors.wasteamount = 'Amount is required';
            isValid = false;
        }

        if (!date) {
            errors.date = 'Date is required';
            isValid = false;
        } else {
            const today = new Date();
            const selectedDate = new Date(date);
            if (selectedDate > today) {
                errors.date = 'Date cannot be in the future';
                isValid = false;
            }
        }

        if (!wastetype) {
            errors.wastetype = 'Waste type is required';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const onSubmit = async e => {
        e.preventDefault();
        if (validateForm()) {
            try {
                await axios.post('http://localhost:4011/analitics/addanalitics', formData);
                navigate('/viewanalitics');
                setFormData({
                    wasteamount: '',
                    date: '',
                    wastetype: ''
                });
            } catch (err) {
                console.error(err.response.data);
            }
        }
    };

    return (
        <div className='container' style={{ marginTop: '200px' }}>
            <div className='row'>
                <div className='col-sm-6'>
                    <h2>Add Waste details</h2>
                    <form onSubmit={onSubmit}>
                        <div className='mb-3'>
                            <TextField
                                label="Amount(kg)"
                                type="text"
                                variant="outlined"
                                color="success"
                                fullWidth
                                margin="normal"
                                name="wasteamount"
                                value={wasteamount}
                                onChange={onChange}
                                required
                                error={!!errors.wasteamount}
                                helperText={errors.wasteamount}
                            />
                        </div>
                        <div className='mb-3'>
                            <TextField
                                type="date"
                                variant="outlined"
                                color="success"
                                fullWidth
                                margin="normal"
                                name="date"
                                value={date}
                                onChange={onChange}
                                required
                                error={!!errors.date}
                                helperText={errors.date}
                                inputProps={{ max: new Date().toISOString().split("T")[0] }}
                            />
                        </div>
                        <div className='mb-3'>
                            <Select
                                id="wastetype"
                                margin="normal"
                                color="success"
                                name="wastetype"
                                variant="outlined"
                                value={wastetype}
                                label="wastetype"
                                onChange={onChange}
                                fullWidth
                                error={!!errors.wastetype}
                            >
                                <MenuItem value={'Recycle'}>Recycle</MenuItem>
                                <MenuItem value={'Compost'}>Compost</MenuItem>
                                <MenuItem value={'Glass'}>Glass</MenuItem>
                                <MenuItem value={'Wet Garbage & Food'}>Wet Garbage & Food</MenuItem>
                            </Select>
                            {errors.wastetype && <span style={{ color: 'red' }}>{errors.wastetype}</span>}
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
