const router = require("express").Router();
let GarbageRequest = require("../models/binguni/GarbageRequest");

//create operation
router.route("/addgarbageRequest").post((req,res) =>{
    const name = req.body.name;
    const companyName = req.body.companyName;
    const address = req.body.address;
    const contactNo = req.body.contactNo;
    const nic = req.body.nic;
    const garbageType = req.body.garbageType;
    const reason = req.body.reason;
    const quantity = req.body.quantity;

    const newGarbageRequest = new GarbageRequest ({
        name,
        companyName,
        address,
        contactNo,
        nic,
        garbageType,
        reason,
        quantity
    })

    newGarbageRequest.save().then(() =>{
        res.json("Successfully requested")
    }).catch((err)=>{
        console.log(err);
    })
})

//Display all operation
router.route("/garbageRequest").get((req,res)=>{
    GarbageRequest.find().then((garbageRequest)=>{
        res.json(garbageRequest)
    }).catch((err)=>{
        console.log(err.message)
        res.status(500).send({status: "Error with getting requestes", error: err.message});
    })
}) 

//Update operation
router.route("/updateGarbageRequest/:gId").put(async (req, res) => {
    let garbageRequestId = req.params.gId;
    const {name, companyName, address, contactNo, nic, garbageType, reason, quantity} = req.body;

    try {
        const updateGarbageRequest = {
            name,
            companyName,
            address,
            contactNo,
            nic,
            garbageType,
            reason,
            quantity
        }
        await GarbageRequest.findByIdAndUpdate(garbageRequestId, updateGarbageRequest);
        res.status(200).send({ status : "Grabge request updated"});
    } catch (err) {
        console.log(err.message);
        res.status(500).send ({ status : "Error with updating data", error: err.message});
    }
});

//Delete operation
router.route("/deleteGarbageRequest/:gId").delete(async (req,res) => {
    let garbageRequestId = req.params.gId;

    try {
        await GarbageRequest.findByIdAndDelete(garbageRequestId);
        res.status(200).send({ status: "Garbage Request Deleted"});
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ status: "Error with deleting GarbageRequest", error: err.message});
    }
});