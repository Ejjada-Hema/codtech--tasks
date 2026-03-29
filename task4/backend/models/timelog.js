const mongoose = require("mongoose")

const TimeSchema = new mongoose.Schema({

site:String,
time:Number,
date:Date

})

module.exports = mongoose.model("TimeLog",TimeSchema)