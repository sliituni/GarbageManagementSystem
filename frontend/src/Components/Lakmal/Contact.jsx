import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import emailjs from 'emailjs-com';

export default function Contact() {
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
        // Replace these values with your MailJS template ID and your MailJS user ID
        const templateId = 'template_jlv2ywo';
        const userId = 'Mupo9YGoJeMdEozJj';

        const templateParams = {
            subject: subject,
            message: message
        };

        emailjs.send('service_b8xy4w8', templateId, templateParams, userId)
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                setSubject('');
                setMessage('');
                setSnackbarMessage('Email sent successfully!');
                setSnackbarSeverity('success');
                setSnackbarOpen(true);
            }, (error) => {
                console.error('Failed to send email:', error.text);
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
