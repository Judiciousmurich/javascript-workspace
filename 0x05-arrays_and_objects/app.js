// Arrays and objects

// //////Arrays
const monday = "Monday";
const tuesday = "Tuesday";
const wednesday = "Wednesday";
const thursday = "Thursday";

const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(daysOfTheWeek[0])
console.log(daysOfTheWeek[3])
console.log(daysOfTheWeek.length) // length of the array
console.log(daysOfTheWeek[daysOfTheWeek.length-1])
daysOfTheWeek.splice( 2, 0, "test")
console.log(daysOfTheWeek)

// mdn docs
// array methods
const monthsOfTheYear = ["March", "April", "May", "June", "May", "July", "August"]

// arrayName.methodName
// push - monthsOfTheYear.push()
monthsOfTheYear.push("September")
console.log(monthsOfTheYear)
monthsOfTheYear.push("October")
console.log(monthsOfTheYear)
monthsOfTheYear.push("November", "December")
console.log(monthsOfTheYear)
// monthsOfTheYear.push("")

// pop - opposite of push
monthsOfTheYear.pop()
console.log(monthsOfTheYear)
monthsOfTheYear.pop()
console.log(monthsOfTheYear)

// unshift - adds elements at the start of an array
monthsOfTheYear.unshift("February")
console.log(monthsOfTheYear)
monthsOfTheYear.unshift("January")
console.log(monthsOfTheYear)

// shift - remove the first element
monthsOfTheYear.shift()
console.log(monthsOfTheYear)
monthsOfTheYear.shift()
console.log(monthsOfTheYear)

// indexOf
console.log(monthsOfTheYear.indexOf('May'))
console.log(monthsOfTheYear.lastIndexOf('May'))

console.log(monthsOfTheYear.reverse())

const friends = ["Nathan", "Sam", "Ivy", "Bilhah","Bri", "Collo","Humphrey", "Keziah", "Vero", "Otwoma", "Kelvin"];

// for (start; condition; increment;){
//     //code to be executed
// }

for (let i = 0; i <= friends.length - 1; i++){
    console.log(friends[i])
}

for (let j = friends.length - 1; j >= 0; j--){
    console.log(friends[j])
}

// objects
const student = {
    regNo: "CT101/g/12345/20",
    fee: 50000,
    fullName: "Mary Wanja",
    course: "Computer Science",
    'age': 23,
    currentUnits: ["Probability and Statistics", "OOP2", "Client Side", "Server side", "Computer Networks", "Calculus", "Software Enginering"],
    currentYear: "Y3S1",
    feePaid: 23000,
    feeBalance: function(){
        return this.fee - this.feePaid
    },
}

console.log(student.regNo)
console.log(student.currentUnits)
for (let k = 0; k < student.currentUnits.length; k++){
    console.log(student.currentUnits[k])
}

console.log(student['feePaid'])
console.log(student['feeBalance']())

console.log(Object.entries(student))

for (let element in Object.entries(student)){
    let currentPairOfProperty = Object.entries(student)[element];
    console.log(`${currentPairOfProperty[0]} -> ${currentPairOfProperty[1]}`)
}

console.log(Object.keys(student))
console.log(Object.values(student))
console.log(Object.entries(student))

const dummyArray = ["person", "animals", "movies", "music"];
// let m;
for (m = 0; m < Object.entries(student).length; m++){
    console.log(Object.entries(student)[m][0], Object.entries(student)[m][1])

    if (Object.entries(student)[0] === 'friends'){
        document.write("This user has friends, add them to your network")
    }else {
        console.log("This user has no friends yet")
    }
}



