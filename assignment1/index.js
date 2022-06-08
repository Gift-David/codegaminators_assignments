const teachersName = ["Mr. Godwin Ama", "Mrs. Josha Hannah", "Mr. Saviour Chukuka", "Mrs. Evelyn Eno"]
const subjectTaught = ["English", "Mathematics", "Ecomics", "Government"]
const  monthlySalary = ["$4,020", "$4,011", "$3,400", "$3,700"]
const payableTax = ["$160.8", "$160.4", "$136", "$148"]
const citizen = [true, false, true, true]
const newArr = teachersName.concat(subjectTaught).concat(monthlySalary).concat(citizen).concat(payableTax)
for(i=0; i<newArr.length; i++){
    console.log(newArr)
} 