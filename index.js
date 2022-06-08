const express = require("express")
const routes = require("./routes")

require("dotenv").config()
const app = express()

app.use(express.json())

app.use("/api", routes)

const PORT = process.env.PORT


app.listen(PORT),()=>{
   console.log("server has started listening")
 }