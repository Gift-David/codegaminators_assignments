const students = require ("../models/studentsModels")


const studentsCtrl = {
   sendData: async(req, res)=>{
try{
    const{name, age, email} = req.body
    const user = new students({name, age, email})
    await user.save()
    res.json(user)
}catch(err){
    console.log(err)
}

   }
}

module.exports = studentsCtrl