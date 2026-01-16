const { Schema } = require("mongoose")

const HoldingsSchema = new Schema({
   
    qty: Number,
    avg: Number,
    price: Number,
    
})

module.exports={HoldingsSchema};