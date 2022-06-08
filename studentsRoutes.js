const express = require("express")
const students = require("../controllers/studentsCtrl")
const router = express.Router()

router.get("/ss1Students", students.getStudents)
router.post("/ss2Students", students.postStudents)
router.put("/ss3Students", students.putStudents)
router.patch("/jss1Students", students.patchStudents)

module.exports = router
