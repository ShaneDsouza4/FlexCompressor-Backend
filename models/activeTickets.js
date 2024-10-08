const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
    ticketID:{
        type: String,
    },
    state:{
        type: String
    },
    priority:{
        type: String
    },
    assigned_to:{
        type: String
    },
    content:{
        type: String
    },
    accessCount: {
        type: Number,
        default: 0
    },
}, {timestamps: true})

//Model
const ActiveTickets = mongoose.model('ActiveTickets', ticketSchema);

//Exports
module.exports = ActiveTickets;