import React, { useState, useEffect } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from backend
    fetch('/user/allUsers') // Create a route in your backend to fetch all users
      .then(response => response.json())
      .then(data => {
        setUsers(data.users); // Assuming your backend returns an object with a key 'users' containing an array of user objects
      })
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  return (
    <div>
      <h2>User Details</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact No</th>
            <th>Address</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.fullname}</td>
              <td>{user.email}</td>
              <td>{user.contactno}</td>
              <td>{user.address}</td>
              {/* Add more cells for additional user details */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
