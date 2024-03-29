import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AllGarbageRequests() {
    const[garbageRequests, setGarbageRequests] = useState([]);

    useEffect(() => {
        function getGarbageRequests() {
            axios.get("http:??localhost:4011/garbageRequest/gbReq")
            .then((res) => {
                setGarbageRequests(res.data);
            })
            .catch((err) => {
                alert(err.message);
            })
        }

        getGarbageRequests();
    });

    return (
        <div>
            <div className="container">
        <div className="container">
          <div className="container"><br/><br/><br/><br/>
            <table className="table">
                <thead>
                    <tr className="table-success">
                        <th scope="col">name</th>
                        <th scope="col">companyName</th>
                        <th scope="col">address</th>
                        <th scope="col">contactNo</th>
                        <th scope="col">nic</th>
                        <th scope="col">garbageType</th>
                        <th scope="col">reason</th>
                        <th scope="col">quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {garbageRequests.map ((garbageRequest,index) => (
                        <tr key = {garbageRequest._id}>
                            <th scope="row">{index + 1}</th>
                            <td>{garbageRequest.name}</td>
                            <td>{garbageRequest.companyName}</td>
                            <td>{garbageRequest.address}</td>
                            <td>{garbageRequest.contactNo}</td>
                            <td>{garbageRequest.nic}</td>
                            <td>{garbageRequest.garbageType}</td>
                            <td>{garbageRequest.reason}</td>
                            <td>{garbageRequest.quantity}</td>
                            <td className="d-flex justify-contenet-between">
                            </td>
                        </tr>
                    ) )}
                    



                </tbody>
            </table>
            
            
            </div>  
            </div> 
        </div>

        </div>
    )

}