const router = require("express").Router();
let analitics = require("../models/analitics");

//create operation
router.route("/addanalitics").post((req, res) => {
    const { wasteamount, date, wastetype } = req.body;

    if (!wasteamount || !date || !wastetype) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    const newanalitics = new analitics({
        wasteamount,
        date,
        wastetype,
    });

    newanalitics.save()
        .then(() => {
            res.json("Analytics added");
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Internal server error" });
        });
});


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
    const {wasteamount,date,wastetype} = req.body;

    const updateanalitics = {
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