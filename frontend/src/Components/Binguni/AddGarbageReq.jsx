import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export default function AddGarbageReq() {
    const Navigate = useNavigate();

    const [name, setname] = useState("");
    const [companyName, setcompanyName] = useState("");
    const [address, setaddress] = useState("");
    const [contactNo, setcontactNo] = useState("");
    const [nic, setnic] = useState("");
    const [garbageType, setgarbageType] = useState("");
    const [reason, setreason] = useState("");
    const [quantity, setquantity] = useState("");
   
    // Validation functions
    const validatenic = () => {
        if (!nic.match(/^\d{9}[vVxX]|\d{12}$/)) {
            setnicError("Invalid NIC format (e.g., 123456789V or 123456789000)");
        } else {
            setnicError("");
        }
    };

    const validateContactNo = () => {
        if (!contactNo.match(/^\d{10}$/)) {
            setContactNoError("Invalid Contact No format (e.g., 1234567890)");
        } else {
            setContactNoError("");
        }
    };

    function sendData(e) {
        e.preventDefault();

        validatenic();
        validateContactNo();

        if (!nicError && !contactNoError) {
            const newPaddymill = {
                name,
                companyName,
                address,
                contactNo,
                nic,
                garbageType,
                reason,
                quantity
            }

            axios.post("http://localhost:4011/garbageRequest/addGarbageRequest", newGarbageReq).then(() => {
                alert("Garbage Request Added")
                Navigate("/index")

            }).catch(() => {
                alert("Error")
            })
        }
    }

    return (
        <div>
            <form className="container" onSubmit={sendData}>
                <br />
                <h2>Add Garbage Request</h2><br />
                <div className="mb-3">
                    <label className="form-label">Owner Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter Owner Name" onChange={(e) => { setname(e.target.value); }} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Company Name</label>
                    <input type="text" className="form-control" id="companyName" placeholder="Enter Company Name" onChange={(e) => { setcompanyName(e.target.value); }} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="Enter Address" onChange={(e) => { setaddress(e.target.value); }} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contact Number</label>
                    <input type="text" className="form-control" id="contactNo" placeholder="Enter Contact Number" onChange={(e) => { setcontactNo(e.target.value); }} onBlur={validateContactNo} required />
                    {contactNoError && <div className="text-danger">{contactNoError}</div>}
                </div>
                <div className="mb-3">
                    <label className="form-label">NIC</label>
                    <input type="text" className="form-control" id="nic" placeholder="Enter NIC Number" onChange={(e) => { setnic(e.target.value); }} onBlur={validatenic} required />
                    {nicError && (<div className="text-danger">{nicError}</div>)}
                </div>
                <div className="mb-3">
                    <label className="form-label">Garbage Type</label>
                    <input type="text" className="form-control" id="garbageType" placeholder="Enter Garbage Type" onChange={(e) => { setgarbageType(e.target.value); }} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Reason</label>
                    <input type="text" className="form-control" id="reason" placeholder="Enter Reason" onChange={(e) => { setreason(e.target.value); }} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Owner Name</label>
                    <input type="text" className="form-control" id="quantity" placeholder="Enter Quantity" onChange={(e) => { setquantity(e.target.value); }} required />
                </div>
                
                
                <button type="submit" className="btn btn-outline-success">Submit</button>
            </form>
        </div>
    )
}

