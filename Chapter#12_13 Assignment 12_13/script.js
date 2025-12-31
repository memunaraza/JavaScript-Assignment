
//    Question 1

var ch = prompt("Enter a character (number or letter):");
var code = ch.charCodeAt(0);

if (code >= 48 && code <= 57) {
   console.log("It is a Number");
} else if (code >= 65 && code <= 90) {
    console.log("It is an Uppercase Letter");
} else if (code >= 97 && code <= 122) {
    console.log("It is a Lowercase Letter");
} else {
    console.log("Invalid Input");
}

//    Question 2

var num1 = +prompt("Enter first integer:");
var num2 = +prompt("Enter second integer:");

if (num1 > num2) {
    console.log(num1 + " is larger");
} else if (num2 > num1) {
    console.log(num2 + " is larger");
} else {
    console.log("Both numbers are equal");
}

//    Question 3

var num = +prompt("Enter a number:");

if (num > 0) {
    console.log("Number is Positive");
} else if (num < 0) {
    console.log("Number is Negative");
} else {
    console.log("Number is Zero");
}

//    Question 4

var letter = prompt("Enter a single character:");

if (
    letter === "a" || letter === "e" || letter === "i" ||
    letter === "o" || letter === "u" ||
    letter === "A" || letter === "E" || letter === "I" ||
    letter === "O" || letter === "U"
) {
   console.log("True (It is a vowel)");
} else {
   console.log("False (It is not a vowel)");
}

//    Question 5

var correctPassword = "ee12345";
var userPassword = prompt("Enter your password:");

if (userPassword === correctPassword) {
    console.log("Correct! The password you entered matches the original password");
    alert("Correct! The password you entered matches the original password");
} else if (userPassword !== correctPassword) {
    console.log("Incorrect password");
    alert("Incorrect password");
} else {
    console.log("Please enter your password");
    alert("Please enter your password");
}

//    Question 6

var time = +prompt("Enter time in 24-hour format (e.g. 1900):");
var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
    console.log(greeting);
} else {
    greeting = "Good evening";
}

console.log(greeting);

//    Question 7

var time = +prompt("Enter time in 24-hour format (e.g. 1900):");

if (time >= 0 && time < 1200) {
    console.log("Good Morning");
} else if (time >= 1200 && time < 1700) {
    console.log("Good Afternoon");
} else if (time >= 1700 && time < 2100) {
    console.log("Good Evening");
} else if (time >= 2100 && time <= 2359) {
    console.log("Good Night");
} else {
    console.log("Invalid Time");
}

//////////////////// END OF ASSIGNMENT ////////////////////
