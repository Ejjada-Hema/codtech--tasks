const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const TimeLog = require("./models/timelog")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/productivity")

app.post("/save", async(req,res)=>{

const {site,time} = req.body

await TimeLog.create({
site,
time,
date:new Date()
})

res.send("saved")

})

app.get("/today", async(req,res)=>{

const logs = await TimeLog.find()

res.json(logs)

})

app.listen(3000,()=>{
console.log("Server running")
})