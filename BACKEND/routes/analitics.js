const router = require("express").Router();
let analitics = require("../models/analitics");

//create oparation
router.route("/addanalitics").post((req,res)=>{ 
    const id = req.body.id;
    const wasteamount = req.body.wasteamount;
    const date = req.body.date;
    const wastetype = req.body.wastetype;

    const newanalitics = new analitics({
        id,
        wasteamount,
        date,
        wastetype,
    })

    newanalitics.save().then(()=>{
        res.json("analitics Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//display oparation(ALL)
router.route("/analitics").get((req,res)=>{
    analitics.find().then((analitics)=>{
        res.json(analitics)
    }).catch((err)=>{
        console.log(err)
    })
})

//update oparation
router.route("/updateanalitics/:aId").put(async(req,res)=>{
    let analiticaId = req.params.aId;
    const {id,wasteamount,date,wastetype} = req.body;

    const updateanalitics = {
        id,
        wasteamount,
        date,
        wastetype
    }
    const update = await analitics.findByIdAndUpdate(analiticaId, updateanalitics).then(()=>{
        res.status(200).send({status: "analitics details updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data",error: err.massage});
    })
})

//delete oparation
router.route("/deleteanalitics/:aId").delete(async(req,res)=>{
    let analiticaId = req.params.aId;

    await analitics.findByIdAndDelete(analiticaId).then(()=>{
        res.status(200).send({status: "analitics Deleted"});
    }).catch((err)=>{
        console.log(err.massage);
        res.status(500).send({status: "Error with delete analitics",error: err.massage});
    })
})

//display (ONE)
router.route("/getanalitics/:aId").get(async(req, res)=>{
    let analiticaId = req.params.aId;
    const user = await analitics.findById(analiticaId).then((analitics)=>{
        res.status(200).send({status: "analitics fetched", analitics})
    }).catch(()=>{
        console.log(err.massage);
        res.status(500).send({status: "Error with get analitics",error: err.massage})
    })
})

module.exports = router;