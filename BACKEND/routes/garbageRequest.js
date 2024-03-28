const router = require("express").Router();
let GarbageRequest = require("../models/garbageRequest");

//create oparation
router.route("/addGarbageRequest").post((req,res)=>{ 
    const name = req.body.name;
    const companyName = req.body.companyName;
    const address = req.body.address;
    const contactNo = req.body.contactNo;
    const nic = req.body.nic;
    const garbageType = req.body.garbageType;
    const reason = req.body.reason;
    const quantity = req.body.quantity;

    const newGarbageRequest = new GarbageRequest({
        name,
        companyName,
        address,
        contactNo,
        nic,
        garbageType,
        reason,
        quantity
    })

    newGarbageRequest.save().then(()=>{
        res.json("Garbage Request Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//display oparation(ALL)
router.route("/GarbafeRequest").get((req,res)=>{
    GarbageRequest.find().then((garbageRequest)=>{
        res.json(garbageRequest)
    }).catch((err)=>{
        console.log(err)
    })
})

//update oparation
router.route("/updateGarbageRequest/:gId").put(async(req,res)=>{
    let garbageRequestId = req.params.gId;
    const {name,companyName,address,contactNo,nic,garbageType,reason,quantity} = req.body;

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
    const update = await GarbageRequest.findByIdAndUpdate(garbageRequestId, updateGarbageRequest).then(()=>{
        res.status(200).send({status: "Garbage Request updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data",error: err.massage});
    })
})

//delete oparation
router.route("/deleteGarabageRequest/:gId").delete(async(req,res)=>{
    let garbageRequestId = req.params.gId;

    await GarbageRequest.findByIdAndDelete(garbageRequestId).then(()=>{
        res.status(200).send({status: "Garbage Request Deleted"});
    }).catch((err)=>{
        console.log(err.massage);
        res.status(500).send({status: "Error with delete Garbage Request",error: err.massage});
    })
})

//display (ONE)
router.route("/getGarbageRequest/:gId").get(async(req, res)=>{
    let garbageRequestId = req.params.gId;
    const user = await GarbageRequest.findById(garbageRequestId).then((garbageRequest)=>{
        res.status(200).send({status: "Garbage Rrequest fetched", garbageRequest})
    }).catch(()=>{
        console.log(err.massage);
        res.status(500).send({status: "Error with get Garbage Request",error: err.massage})
    })
})

module.exports = router;