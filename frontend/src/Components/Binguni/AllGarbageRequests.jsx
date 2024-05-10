import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AHeader from "../AHeader";

export default function AllGarbageRequests() {
    const [garbageRequests, setGarbageRequests] = useState([]);

    useEffect(() => {
        function getGarbageRequests() {
            axios.get("http://localhost:4011/garbageRequest/GarbafeRequest")
            .then((res) => {
                setGarbageRequests(res.data);
            })
            .catch((err) => {
                alert(err.message);
            });
        }

        getGarbageRequests();
    }, []); // Empty dependency array to execute only once on component mount

    return (
        <div>
        <AHeader/>
        <div className="container" style={{paddingTop: '150px'}}>
        <h2>garbage Request</h2><br/>
            <table className="table">
                <thead className="table-success">
                    <tr>
                        <th>Name</th>
                        <th>Company Name</th>
                        <th>Address</th>
                        <th>Contact No</th>
                        <th>NIC</th>
                        <th>Garbage Type</th>
                        <th>Reason</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {garbageRequests.map((garbageRequest, index) => (
                        <tr key={index}>
                            <td>{garbageRequest.name}</td>
                            <td>{garbageRequest.companyName}</td>
                            <td>{garbageRequest.address}</td>
                            <td>{garbageRequest.contactNo}</td>
                            <td>{garbageRequest.nic}</td>
                            <td>{garbageRequest.garbageType}</td>
                            <td>{garbageRequest.reason}</td>
                            <td>{garbageRequest.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
}
