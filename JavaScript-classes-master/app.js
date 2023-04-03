const student = {
    firstName: "Dennis",
    lastName: "otwoma",
    age: 28,
    course: "computer science",
    yearOfStudy : "y3"
}
console.log(student.course)
console.log(student.firstName)
function addTwo(num1, num2){
    console.log(num1 + num2)
}

class Student{
    constructor(firstName, lastName, course, yearOfStudy){
        this.firstName = firstName
        this.lastName = lastName
        this.course = course
        this.yearOfStudy = yearOfStudy
    }

    // methods
    logStudentName(){
        console.log(this.firstName)
    }

    logStudentCourse(){
        console.log(this.course)
    }

    logStudentInfor(){
        console.log(`First Name: ${this.firstName}`)
        console.log(`last Name: ${this.lastName}`)
        console.log(`Course: ${this.course}`)
        console.log(`year of study: ${this.yearOfStudy}`)
    }
}

const student1 = new Student(firstName="dennis", lastName="otwoma", course="cs")
console.log(student1.course)
student1.logStudentName()
const student2 = new Student(firstName="humphrey", lastName="kimathi", course="IT")
console.log(student2.lastName)
student2.logStudentName()



const student3 = new Student(firstName="ivy", lastName="mbogo", course="cs", yearOfStudy="4")
console.log(student3.yearOfStudy)
student3.logStudentCourse()
student3.logStudentInfor()

let number = 3.142;

console.log(Math.floor(number))
console.log(Math.ceil(number))
console.log(Math.random())
console.log(Math.max(12, 15))


class Arithmetic{
    constructor(number1, number2){
        this.number1 = number1
        this.number2 = number2
    }

    add(){
        return this.number1 + this.number2
    }

    subtract(){
        return this.number1 - this.number2
    }

    multiply(){
        return this.number1 * this.number2
    }

    divison(){
        return this.number1 / this.number2
    }
}

const myArithmetic = new Arithmetic(23, 12)
console.log(myArithmetic.add())
console.log(myArithmetic.multiply())
console.log(myArithmetic.divison())
console.log(myArithmetic.subtract())

const myArray = new Array([10, 20, 30, 40, 50])
myArray.push(70)
console.log(myArray)

const myName = new String("dennis")
myName.toUpperCase()
console.log(myName)

d