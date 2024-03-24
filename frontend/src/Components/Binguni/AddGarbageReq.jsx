import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export default function AddGarbageRequest() {
    const Navigate = useNavigate();

    const [ownerName, setownerName] = useState("");
    const [NIC, setNIC] = useState("");
    const [contactNo, setcontactNo] = useState("");
    const [address, setaddress] = useState("");
    const [district, setdistrict] = useState("");
    const [paddymillRegNo, setpaddymillRegNo] = useState("");
    const [password, setpassword] = useState("");
    const [cnfrmpassword, setcnfrmpassword] = useState("");
    const [nicError, setNicError] = useState("");
    const [contactNoError, setContactNoError] = useState("");

    // Validation functions
    const validateNIC = () => {
        if (!NIC.match(/^\d{9}[vVxX]|\d{12}$/)) {
            setNicError("Invalid NIC format (e.g., 123456789V or 123456789000)");
        } else {
            setNicError("");
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

        validateNIC();
        validateContactNo();

        // Check if passwords match
        if (password !== cnfrmpassword) {
            alert("Passwords do not match");
            return;
        }

        if (!nicError && !contactNoError) {
            const newPaddymill = {
                ownerName,
                NIC,
                contactNo,
                address,
                district,
                paddymillRegNo,
                password,
                cnfrmpassword
            }

            axios.post("http://localhost:8070/paddymill/addpm", newPaddymill).then(() => {
                alert("Paddymill Added")
                Navigate("/pm")

            }).catch(() => {
                alert("Error")
            })
        }
    }

    return (
        <div>
            <form className="container" onSubmit={sendData}>
                <br />
                <h2>Add New Paddymill</h2><br />
                <div className="mb-3">
                    <label className="form-label">Owner Name</label>
                    <input type="text" className="form-control" id="ownerName" placeholder="Enter Owner Name" onChange={(e) => { setownerName(e.target.value); }} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">NIC</label>
                    <input type="text" className="form-control" id="NIC" placeholder="Enter NIC Number" onChange={(e) => { setNIC(e.target.value); }} onBlur={validateNIC} required />
                    {nicError && (<div className="text-danger">{nicError}</div>)}
                </div>
                <div className="mb-3">
                    <label className="form-label">Contact Number</label>
                    <input type="text" className="form-control" id="contactNo" placeholder="Enter Contact Number" onChange={(e) => { setcontactNo(e.target.value); }} onBlur={validateContactNo} required />
                    {contactNoError && <div className="text-danger">{contactNoError}</div>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="Enter Address" onChange={(e) => { setaddress(e.target.value); }} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">District</label>
                    <select className="form-select" id="district" onChange={(e) => { setdistrict(e.target.value); }}>
                        <option value="">Select District</option>
                        <option value="Colombo">Colombo </option>
                        <option value="Anuradhapura">Anuradhapura</option>
                        <option value="Kandy">Kandy </option>
                        <option value="Gampaha">Gampaha</option>
                        <option value="Kalutara">Kalutara</option>
                        <option value="Matale">Matale</option>
                        <option value="NuwaraEliya">Nuwara Eliya</option>
                        <option value="Galle">Galle</option>
                        <option value="Matara">Matara</option>
                        <option value="Hambantota">Hambantota</option>
                        <option value="Jaffna">Jaffna</option>
                        <option value="Kilinochchi">Kilinochchi</option>
                        <option value="Mannar">Mannar</option>
                        <option value="Vavuniya">Vavuniya</option>
                        <option value="Mullaitivu">Mullaitivu</option>
                        <option value="Batticaloa">Batticaloa</option>
                        <option value="Ampara">Ampara</option>
                        <option value="Trincomalee">Trincomalee</option>
                        <option value="Kurunegala">Kurunegala</option>
                        <option value="Puttalam">Puttalam</option>
                        <option value="Anuradhapura">Anuradhapura</option>
                        <option value="Polonnaruwa">Polonnaruwa</option>
                        <option value="Badulla">Badulla</option>
                        <option value="Moneragala">Moneragala</option>
                        <option value="Ratnapura">Ratnapura</option>
                        <option value="Kegalle">Kegalle</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Paddymill Registration No</label>
                    <input type="text" className="form-control" id="paddymillRegNo" placeholder="Paddymill Registration Number" onChange={(e) => { setpaddymillRegNo(e.target.value); }} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="text" className="form-control" id="password" placeholder="Enter Password" onChange={(e) => { setpassword(e.target.value); }} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input type="text" className="form-control" id="cnfrmpassword" placeholder="Confrim Password" onChange={(e) => { setcnfrmpassword(e.target.value); }} required />
                </div>
                <button type="submit" className="btn btn-outline-success">Submit</button>
            </form>
        </div>
    )
}

