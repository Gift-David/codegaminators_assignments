const express = require("express")
const routes = require("./routes")
const dotenv = require("dotenv")
const dbConnect = require("./db")

const mongoose = require("mongoose")

require("dotenv").config()
const app = express()

app.use(express.json())

app.use("/api", routes)

const URL = process.env.MONGODB_URL
mongoose .connect(URL,()=>{
  console.log("Database connected")
 })

dbConnect()

const PORT = process.env.PORT || 8000

app.listen(PORT),()=>{
  console.log("server has started listening")
}

app.get("/api/students", (req, res)=>{
  res.json({msg: "Welcome to our Backend App"})
}) 
