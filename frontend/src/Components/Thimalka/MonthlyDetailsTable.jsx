import React, { useState, useEffect } from 'react';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Button, Paper, Modal, Box } from '@mui/material'; // Import Box
import EditTableForm from './EditTableForm';
import axios from 'axios';

// Define style variable for the Box component
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '10px',
  p: 4,
};

const MonthlyDetailsTable = () => {
  const [monthlyDetails, setMonthlyDetails] = useState([]);
  const [editingDetail, setEditingDetail] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:4011/monthlyana/monthlyDetails')
      .then(response => {
        setMonthlyDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching monthly details:', error);
      });
  }, []);

  const handleEdit = (detail) => {
    setEditingDetail(detail);
    setOpenModal(true);
  };

  const handleCancel = () => {
    setEditingDetail(null);
    setOpenModal(false);
  };

  const handleSave = () => {
    setOpenModal(false);
  };

  return (
    <div className='container mt-5'>
      <TableContainer component={Paper}>
        <Table aria-label="monthly details table">
          <TableHead>
            <TableRow>
              <TableCell><b>Month</b></TableCell>
              <TableCell><b>Amount</b></TableCell>
              <TableCell><b>Action</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {monthlyDetails.map(detail => (
              <TableRow key={detail._id}>
                <TableCell>{detail.month}</TableCell>
                <TableCell>{detail.amount}</TableCell>
                <TableCell>
                  <Button variant="contained" onClick={() => handleEdit(detail)} style={{ background: '#34A853', color: 'white' }}>Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Modal for editing details */}
      <Modal
        open={openModal}
        onClose={handleCancel}
        aria-labelledby="modal-edit-detail"
        aria-describedby="modal-edit-detail-description"
       >
        <Box sx={style}> {/* Use Box component with style */}
          <EditTableForm monthlyDetail={editingDetail} onCancel={handleCancel} onSave={handleSave} />
        </Box>
      </Modal>
    </div>
  );
};

export default MonthlyDetailsTable;
