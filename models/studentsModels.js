const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    state: {
        type: String,
    },
},
{
    timestamps: true
})

const students = mongoose.model("students", studentSchema)

module.exports = students