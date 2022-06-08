const studentsCtrl = {
    getStudents: (req, res) => {res.json({ss1Students: "Daniel, John"}
)},
    postStudents: (req, res) => {res.json({ss2Student: "Joshua, Ada"}
)},
    putStudents: (req, res) => {res.json({ss3Students: "Philip, Joy"}
)},
    patchStudents: (req, res) => {res.json({jss1Students: "Peter, Love"}
)},
}

module.exports = studentsCtrl