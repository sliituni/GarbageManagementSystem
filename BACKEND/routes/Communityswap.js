const router = require("express").Router();
let Communityswap = require("../models/Communityswap");

router.route("/add").post((req,res)=>{
    const itemName = req.body.itemName;
    const itemCondition = req.body.itemCondition;
    const contactNo = Number(req.body.contactNo);
    const address = req.body.address;

    const newSwap = new Communityswap({
        itemName,
        itemCondition,
        contactNo,
        address
    })

    newSwap.save().then(()=>{
        res.json("Item added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    Communityswap.find().then((items)=>{
        res.json(items)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async(req,res)=>{
    let itemId = req.params.id;
    const{itemName, itemCondition, contactNo, address} = req.body;

    const updateItem = {
        itemName,
        itemCondition,
        contactNo,
        address
    }
    const update = await Communityswap.findByIdAndUpdate(itemId, updateItem)
    .then(()=>{
        res.status(200).send({status: "Item updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message}); 
    }) 
})

router.route("/delete/:id").delete(async(req, res)=>{
    let itemId = req.params.id;

    await Communityswap.findByIdAndDelete(itemId)
    .then(()=>{
        res.status(200).send({status: "Item deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete item", error: err.message});
    })
})

router.route("/get/:id").get(async(req,res)=>{
    let itemId = req.params.id;
    const item = await Communityswap.findById(itemId)
    .then((item)=>{
        res.status(200).send({status: "Item fetched", item})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get item", error: err.message});
    })
})

module.exports = router;
