// all code for this lab to be completed in this file
let currentTemp = 70;
//while / for 
if (currentTemp > 32) {
    console.log("It is not currently freezing temperatures.")
} else {
    console.log("It is currently freezing.")
}
currentTemp = 31;
if (currentTemp > 32) {
    console.log("It is not currently freezing temperatures.")
} else {
    console.log("It is currently freezing.")
}

let age1 = 43
let age2 = 32

//older test
if (age1 > age2) {
    console.log("Yes age 1 is older than age 2")
} else if (age1 < age2) {
    //younger condition
    console.log("No, age 1 is not older than age 2")
} else if (age1 === age2) {
    //same age condition
    console.log("They're the same age!")
} else {
    //something went all wrong
    console.log("I think you don't know numbers!")
}

//isLoggedIn Conditional Challenge
let isLoggedIn = true //rep being logged in

if (isLoggedIn) {
    console.log("Welcome back!") //am logged in
} else {
    console.log("Please log in.") //not logged in
}