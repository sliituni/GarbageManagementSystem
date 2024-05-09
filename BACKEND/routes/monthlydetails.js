const router = require("express").Router();
const MonthlyDetails = require("../models/monthlydetails");

// Create Operation
router.post('/addmonthlyDetails', (req, res) => {
    const { month, amount } = req.body;

    const newMonthlyDetails = new MonthlyDetails({
        month,
        amount
    });

    newMonthlyDetails
        .save()
        .then(() => res.json('Details added'))
        .catch((err) => {
            console.error(err);
            res.status(500).json('Error adding details');
        });
});

// Display Operation (ALL)
router.get("/monthlyDetails", (req, res) => {
    MonthlyDetails.find()
        .then((monthlydetails) => {
            res.json(monthlydetails);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with fetching monthly details", error: err.message });
        });
});

// Update Operation
router.put("/updatemonthlyDetails/:mId", async (req, res) => {
    let monthlyDetailsId = req.params.mId;
    const { month, amount } = req.body;

    const updateMonthlyDetails = {
        month,
        amount
    };

    try {
        await MonthlyDetails.findByIdAndUpdate(monthlyDetailsId, updateMonthlyDetails);
        res.status(200).send({ status: "Monthly details updated" });
    } catch (err) {
        console.log(err);
        res.status(500).send({ status: "Error with updating data", error: err.message });
    }
});

// Delete Operation
router.delete("/deletemonthlyDetails/:mId", async (req, res) => {
    let monthlyDetailsId = req.params.mId;

    try {
        await MonthlyDetails.findByIdAndDelete(monthlyDetailsId);
        res.status(200).send({ status: "Monthly details deleted" });
    } catch (err) {
        console.log(err);
        res.status(500).send({ status: "Error with deleting monthly details", error: err.message });
    }
});

// Display Operation (ONE)
router.get("/getmonthlyDetails/:mId", async (req, res) => {
    let monthlyDetailsId = req.params.mId;

    try {
        const monthlyDetails = await MonthlyDetails.findById(monthlyDetailsId);
        res.status(200).send({ status: "Monthly details fetched", monthlyDetails });
    } catch (err) {
        console.log(err);
        res.status(500).send({ status: "Error with fetching monthly details", error: err.message });
    }
});

module.exports = router;
