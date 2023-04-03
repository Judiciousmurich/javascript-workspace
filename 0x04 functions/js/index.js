//functions
function greet(name, lastName){
    console.log('Hello ' + name + ' ' + lastName);
}

greet('judy', 'muthui');

function addNumbers(){
    let firstNumber = 5;
    let secondNumber = 6;
    console.log(firstNumber + secondNumber)
}
addNumbers()

function multiplynumbers(){
    let firstNumber = 8;
    let secondNumber = 8;
    console.log(firstNumber * secondNumber)
}
multiplynumbers()

function subtractNumbers(){
    let firstNumber = 90;
    let secondNumber = 80;
    console.log(firstNumber - secondNumber)
}
subtractNumbers()

// function addTwoNumbers(){
//     let result = 5 + 6;
//     return result;
// }
// console.log(result)
// console.log(addTwoNumbers(10,11))
// addTwoNumbers(12, 15)

function multiplyTwoNumbers(number1, number2){
     //only multiplies the numbers if the first number is greater than 100 and second number is greater than 800
    if(number1 < 100){
         console.log("cannot multiply when number 1 is less tan 100")
     }else if (number2 < 800){
        console.log("cannot multiply ehen number 2 is less than 800")
     }else{
         let result = number1 * number2
        console.log(result)
     }
    
 }

// if(0){
//     let x ='y';
//  }
//  let x =z;
//  console.log(x)

//types of functions
const myFuncton = function(){
    console.log("this is my function")
}
myFuncton()

// arrow function

const myOtherFunction = () => {
    console.log("This is my arrow function")
}
myOtherFunction()

const helloWorld = () => {
    console.log("Hello World")
}
const addTwoNumbersArrow = (number1, number2) => {
    console.log(number1 + number2)
}

const sayHello = username => {
    console.log(`Hello ${username}`)
}
sayHello("zaph")

const sayHello1 = username => {
    console.log(`hello ${username}`)
}
sayHello1("gladys")

const areaOfRectangle = (length, width)  => {
    return length * width
}
const factor = 2
const areaRect = areaOfRectangle(45, 56) + factor
console.log(areaRect)

// objects revision
const student = {
    regNo: 'PA1065688/21',
    course: "Software engineering",
    units: ["java","client","computer"],
    fullName:"jack Odoyo"

}
console.log(student.fullName)
console.log(student.course)

const sampeArray = [1, 2, 3, 4]
const students = [
    {fullName: "Lelo Bikeyo", age:25},
    {fullName: "mexin kahiga", age:30},
    {fullName: "Brenda James", age:15},
    {fullName: "Faith Kayan", age:23},
]
console.log(students[0])
for(let i = 0;i < students.length; i++){
     console.log(students[i].fullName, students[i].age)
} 
