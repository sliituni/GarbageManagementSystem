const router = require("express").Router();
const schedule = require("../models/schedule");
let Schedule = require("../models/schedule");

//create oparation
router.route("/addSchedule").post((req,res)=>{ 
    const A1 = req.body.A1;
    const A2 = req.body.A2;
    const A3 = req.body.A3;
    const A4 = req.body.A4;
    const A5 = req.body.A5;
    const A6 = req.body.A6;
    const A7 = req.body.A7;
    const A8 = req.body.A8;

    const newScheduLe = new Schedule({
        A1,
        A2,
        A3,
        A4,
        A5,
        A6,
        A7,
        A8
    })

    newScheduLe.save().then(()=>{
        res.json("Schedule Modified")
    }).catch((err)=>{
        console.log(err);
    })
})

//display oparation(ALL)
router.route("/Schedule").get((req,res)=>{
    Schedule.find().then((Schedule)=>{
        res.json(schedule)
    }).catch((err)=>{
        console.log(err)
    })
})

//update oparation
router.route("/updateSchedule/:sId").put(async(req,res)=>{
    let scheduleId = req.params.sId;
    const {A1,A2,A3,A4,A5,A6,A7,A8} = req.body;

    const updateSchedule = {
        A1,
        A2,
        A3,
        A4,
        A5,
        A6,
        A7,
        A8
    }
    const update = await Schedule.findByIdAndUpdate(scheduleId, updateSchedule).then(()=>{
        res.status(200).send({status: "Schedule updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data",error: err.massage});
    })
})

//delete oparation
router.route("/deleteScheduleRequest/:sId").delete(async(req,res)=>{
    let scheduleId = req.params.sId;

    await Schedule.findByIdAndDelete(scheduleId).then(()=>{
        res.status(200).send({status: "Schedule Deleted"});
    }).catch((err)=>{
        console.log(err.massage);
        res.status(500).send({status: "Error with delete Schedule",error: err.massage});
    })
})

//display (ONE)
router.route("/getSchedule/:sId").get(async(req, res)=>{
    let scheduleId = req.params.sId;
    const user = await Schedule.findById(scheduleId).then((schedule)=>{
        res.status(200).send({status: "Schedule fetched", schedule})
    }).catch(()=>{
        console.log(err.massage);
        res.status(500).send({status: "Error with get Sechedule",error: err.massage})
    })
})

module.exports = router;