import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";

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
    const [nicError, setNicError] = useState("");
    const [contactNoError, setContactNoError] = useState(""); // Define state variables for errors

    // Validation functions
    const validatenic = () => {
        if (!nic.match(/^\d{9}[vVxX]|\d{12}$/)) {
            setNicError("Invalid NIC format (e.g., 123456789V or 123456789000)"); // Use setNicError to update error state
        } else {
            setNicError("");
        }
    };

    const validateContactNo = () => {
        if (!contactNo.match(/^\d{10}$/)) {
            setContactNoError("Invalid Contact No format (e.g., 1234567890)"); // Use setContactNoError to update error state
        } else {
            setContactNoError("");
        }
    };

    function sendData(e) {
        

        validatenic();
        validateContactNo();

        if (!nicError && !contactNoError) {
            const newGarbageReq = {
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
    <Header/>
        <div style={{paddingTop:'150px'}}>
            <form className="container" onSubmit={sendData}>
                <h2>Add Garbage Request</h2><br />
                <div className="mb-3">
                    <label className="form-label">Owner Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter Owner Name" onChange={(e) => { setname(e.target.value); }} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Company Name {'('}optional{')'}</label>
                    <input type="text" className="form-control" id="companyName" placeholder="Enter Company Name" onChange={(e) => { setcompanyName(e.target.value); }} />
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
                    <label className="form-label">Quantity</label>
                    <input type="text" className="form-control" id="quantity" placeholder="Enter Quantity" onChange={(e) => { setquantity(e.target.value); }} required />
                </div>
                <br/>
                <h6>Collect within 3 days from the requested date *</h6>
                <button type="submit" className="btn btn-success rounded-pill" style={{ width: '300px' }}><b>Submit</b></button>
                <br/><br/>
            </form>
        </div>
        <Footer/>
        </div>
    )
}