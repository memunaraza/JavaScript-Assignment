// 1. City name
var city = prompt("Enter city name");
if (city === "Karachi") {
  alert("Welcome to city of lights");
}

// 2. Gender
var gender = prompt("Enter your gender");
if (gender === "male") {
  alert("Good Morning Sir.");
}
if (gender === "female") {
  alert("Good Morning Ma’am.");
}

// 3. Traffic signal
var signal = prompt("Enter color of road traffic signal");
if (signal === "Red") {
  alert("Must Stop");
}
if (signal === "Yellow") {
  alert("Ready to move");
}
if (signal === "Green") {
  alert("Move now");
}

// 4. Fuel
var fuel = prompt("Enter remaining fuel in car (litres)");
if (fuel < 0.25) {
  alert("Please refill the fuel in your car");
}

// 5. Conditions
var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}

if (true) {
  alert("True");
}
if (false) {
  alert("False");
}

if ("car" < "cat") {
  alert("car is smaller than cat");
}

// 6. Marks sheet
var totalMarks = prompt("Enter total marks");
var marks1 = prompt("Enter marks obtained in subject 1");
var marks2 = prompt("Enter marks obtained in subject 2");
var marks3 = prompt("Enter marks obtained in subject 3");

var obtainedMarks = Number(marks1) + Number(marks2) + Number(marks3);
var percentage = (obtainedMarks / totalMarks) * 100;

var grade;
var remarks;

if (percentage >= 80) {
  grade = "A-one";
  remarks = "Excellent";
}
if (percentage >= 70 && percentage < 80) {
  grade = "A";
  remarks = "Good";
}
if (percentage >= 60 && percentage < 70) {
  grade = "B";
  remarks = "You need to improve";
}
if (percentage < 60) {
  grade = "Fail";
  remarks = "Sorry";
}

document.write("<h1>Marks Sheet</h1>");
document.write("Total marks : " + totalMarks + "<br>");
document.write("Marks obtained : " + obtainedMarks + "<br>");
document.write("Percentage : " + percentage + "%<br>");
document.write("Grade : " + grade + "<br>");
document.write("Remarks : " + remarks + "<br>");

// 7. Guess game
var secretNumber = 7;
var userGuess = prompt("Guess the secret number (1 to 10)");

if (userGuess == secretNumber) {
  alert("Bingo! Correct answer");
}
if (userGuess == secretNumber - 1) {
  alert("Close enough to the correct answer");
}

// 8. Divisible by 3
var num = prompt("Enter a number");
if (num % 3 === 0) {
  alert("Number is divisible by 3");
}

// 9. Even / Odd
var number = prompt("Enter a number");
if (number % 2 === 0) {
  alert("Even number");
}
if (number % 2 !== 0) {
  alert("Odd number");
}

// 10. Temperature
var T = prompt("Enter temperature");

if (T > 40) {
  alert("It is too hot outside.");
}
if (T > 30 && T <= 40) {
  alert("The Weather today is Normal.");
}
if (T > 20 && T <= 30) {
  alert("Today’s Weather is cool.");
}
if (T > 10 && T <= 20) {
  alert("OMG! Today’s weather is so Cool.");
}

// 11. Calculator
var firstNumber = prompt("Enter first number");
var secondNumber = prompt("Enter second number");
var operation = prompt("Enter operation (+, -, *, /, %)");

if (operation === "+") {
  alert(Number(firstNumber) + Number(secondNumber));
}
if (operation === "-") {
  alert(firstNumber - secondNumber);
}
if (operation === "*") {
  alert(firstNumber * secondNumber);
}
if (operation === "/") {
  alert(firstNumber / secondNumber);
}
if (operation === "%") {
  alert(firstNumber % secondNumber);
}