import React, { useState } from "react";
import { Container, TextField, Button, Typography, Snackbar } from "@mui/material";
import MuiAlert from '@mui/material/Alert'; // Import MuiAlert component

export default function Notification() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("success");

  const sendEmail = async () => {
    let dataSend = {
      email: email,
      subject: subject,
      message: message,
    };

    try {
      const res = await fetch(`http://localhost:4011/user/sendEmail`, {
        method: "POST",
        body: JSON.stringify(dataSend),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        setAlertMessage("Email sent successfully!");
        setAlertSeverity("success");
        setAlertOpen(true);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error(error);
      setAlertMessage("Failed to send email");
      setAlertSeverity("error");
      setAlertOpen(true);
    }
  };

  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: 50 }}>
      <Typography variant="h4" gutterBottom>
        Send Notifications
      </Typography>
      <form>
        <TextField
          fullWidth
          label="Email address"
          placeholder="Receiver's Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          variant="outlined"
          required
        />
        <TextField
          fullWidth
          label="Subject"
          placeholder="Enter the subject here..."
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          margin="normal"
          variant="outlined"
          required
        />
        <TextField
          fullWidth
          label="Message"
          placeholder="Enter your message here..."
          multiline
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          margin="normal"
          variant="outlined"
          required
        />
        <Button
          type="button"
          variant="contained"
          className='rounded-pill'
          onClick={() => sendEmail()}
          style={{ marginTop: 20, width: '200px', backgroundColor: '#34A853', color: 'white' }}
        >
          Send Email
        </Button>
      </form>
      <Snackbar
        open={alertOpen}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MuiAlert onClose={handleCloseAlert} variant="filled" severity={alertSeverity} style={{width:'400px'}}>
          {alertMessage}
        </MuiAlert>
      </Snackbar>
    </Container>
  );
}
