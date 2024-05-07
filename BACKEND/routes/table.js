const router = require('express').Router();
const Table = require('../models/table');

// Add data
router.route('/addcelldata').post((req, res) => {
  const { a1, a2, a3, a4, abcde5, ab6,abcde7,abcde8,b1, b2, b3, b4,c1, c2, c3, c4,c6,d1, d2, d3, d4,de6,e1, e2, e3, e4 } = req.body;

  const newTable = new Table({
    a1, a2, a3, a4, abcde5, ab6,abcde7,abcde8,b1, b2, b3, b4,c1, c2, c3, c4,c6,d1, d2, d3, d4,de6,e1, e2, e3, e4
  });

  newTable
    .save()
    .then(() => res.json('Data added'))
    .catch((err) => {
      console.error(err);
      res.status(500).json('Error: Unable to add data');
    });
});

//display (ALL)
router.route("/fulltable").get((req,res)=>{
    Table.find().then((table)=>{
        res.json(table)
    }).catch((err)=>{
        console.log(err)
    })
})

//display (ONE)
router.route("/getTable/:tId").get(async(req, res)=>{
    let tableId = req.params.tId;
    const user = await Table.findById(tableId).then((table)=>{
        res.status(200).send({status: "table fetched", table})
    }).catch(()=>{
        console.log(err.massage);
        res.status(500).send({status: "Error with get table",error: err.massage})
    })
})

// Update operation
router.route("/updatetable/:tId").put(async(req,res)=>{
    let tableId = req.params.tId; // Corrected from req.params.gId to req.params.tId
    const {a1, a2, a3, a4, abcde5, ab6,abcde7,abcde8,b1, b2, b3, b4,c1, c2, c3, c4,c6,d1, d2, d3, d4,de6,e1, e2, e3, e4} = req.body;

    const updateTable = {
        a1, a2, a3, a4, abcde5, ab6,abcde7,abcde8,b1, b2, b3, b4,c1, c2, c3, c4,c6,d1, d2, d3, d4,de6,e1, e2, e3, e4
    }
    try {
        const updatedTable = await Table.findByIdAndUpdate(tableId, updateTable);
        if (!updatedTable) {
            return res.status(404).send({ status: "Error", message: "Table not found" });
        }
        res.status(200).send({ status: "Table updated" });
    } catch (err) {
        console.error(err);
        res.status(500).send({ status: "Error", message: "Internal server error" });
    }
});


module.exports = router;
