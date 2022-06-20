const express = require("express")
const studentsCtrl = require("../controllers/studentsCtrl")
// const router = express.router()

const router = express.Router()
router.post("/student", studentsCtrl.sendData)

module.exports = router;
