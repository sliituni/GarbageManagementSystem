import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import axios from 'axios'; // Import Axios for making HTTP requests

export default function Contact() {
    const [from_name, setFrom_name] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbarOpen(false);
    };

    const sendEmail = () => {
        const formData = {
            from_name: from_name,
            subject: subject,
            message: message
        };

        // Make a POST request to your Express backend
        axios.post('http://localhost:4011/contact/addContact', formData)
            .then(response => {
                console.log('Response:', response.data);
                setFrom_name('');
                setSubject('');
                setMessage('');
                setSnackbarMessage('Email sent successfully!');
                setSnackbarSeverity('success');
                setSnackbarOpen(true);
            })
            .catch(error => {
                console.error('Error:', error);
                setSnackbarMessage('Failed to send email. Please try again later.');
                setSnackbarSeverity('error');
                setSnackbarOpen(true);
            });
    };

    return (
        <div className='container'>
            <center>
                <Card style={{ width: '1000px', borderRadius: '20px' }}>
                    <CardContent style={{ width: '1000px' }}>
                        <h3>Contact Us</h3>
                        <TextField
                            label="Email"
                            variant='outlined'
                            color='success'
                            fullWidth
                            margin='normal'
                            value={from_name}
                            onChange={(e) => setFrom_name(e.target.value)}
                            required
                        />
                        <TextField
                            label="Subject"
                            variant='outlined'
                            color='success'
                            fullWidth
                            margin='normal'
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                        />
                        <TextField
                            label="Type your message..."
                            variant='outlined'
                            color='success'
                            fullWidth
                            margin='normal'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                        <Button
                            variant="contained"
                            className='rounded-pill'
                            style={{ width: '150px', marginRight: '10px', backgroundColor: '#34A853', color: 'white' }}
                            onClick={sendEmail}
                        >
                            <b>Submit</b>
                        </Button>
                        <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose} anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}>
                            <MuiAlert elevation={6} variant="filled" onClose={handleSnackbarClose} severity={snackbarSeverity}>
                                {snackbarMessage}
                            </MuiAlert>
                        </Snackbar>
                    </CardContent>
                </Card>
            </center>
        </div>
    );
}
