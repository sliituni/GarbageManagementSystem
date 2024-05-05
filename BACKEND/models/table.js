const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
    a1: {
        type: String,
        required: true
    },
    a2: {
        type: String,
        required: true
    },
    a3: {
        type: String,
        required: true
    },
    a4: {
        type: String,
        required: true
    },
    abcde5: {
        type: String,
        required: true
    },
    ab6: { 
        type: String,
        required: true,
    },
    abcde7: {
        type: String,
        required: true
    },
    abcde8: {
        type: String,
        required: true
    },
    b1: {
        type: String,
        required: true
    },
    b2: {
        type: String,
        required: true
    },
    b3: {
        type: String,
        required: true
    },
    b4: {
        type: String,
        required: true
    },
    c1: {
        type: String,
        required: true
    },
    c2: {
        type: String,
        required: true
    },
    c3: {
        type: String,
        required: true
    },
    c4: {
        type: String,
        required: true
    },
    c6: {
        type: String,
        required: true
    },
    d1: {
        type: String,
        required: true
    },
    d2: {
        type: String,
        required: true
    },
    d3: {
        type: String,
        required: true
    },
    d4: {
        type: String,
        required: true
    },
    de6: {
        type: String,
        required: true
    },
    e1: {
        type: String,
        required: true
    },
    e2: {
        type: String,
        required: true
    },
    e3: {
        type: String,
        required: true
    },
    e4: {
        type: String,
        required: true
    },
});

const Table = mongoose.model("Table", tableSchema);

module.exports = Table;
