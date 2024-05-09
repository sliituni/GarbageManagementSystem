import React, { useState, useEffect } from 'react';
import { Container, Typography, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import AHeader from '../AHeader';

const AllContactDetails = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        try {
            const response = await fetch('http://localhost:4011/contact/allContact');
            const data = await response.json();
            setContacts(data);
        } catch (error) {
            console.error('Error fetching contacts:', error);
        }
    };

    return (
        <div>
        <AHeader/>
        <Container style={{paddingTop: '150px'}}>
            <Typography variant="h4" gutterBottom>All Inquires Details</Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>From Gmail</TableCell>
                            <TableCell>Subject</TableCell>
                            <TableCell>Message</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {contacts.map((contact) => (
                            <TableRow key={contact._id}>
                                <TableCell>{contact.from_name}</TableCell>
                                <TableCell>{contact.subject}</TableCell>
                                <TableCell>{contact.message}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
        </div>
    );
};

export default AllContactDetails;
