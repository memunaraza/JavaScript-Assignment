
 //  Q1. Positive Integer

var num = prompt("Enter a positive integer:");
num = Number(num);

document.write("<h3>Question 1</h3>");
document.write("<p>");
document.write("Number: " + num + "<br>");
document.write("Round off value: " + Math.round(num) + "<br>");
document.write("Floor value: " + Math.floor(num) + "<br>");
document.write("Ceil value: " + Math.ceil(num));
document.write("</p>");

//   Q2. Negative Floating Number

var negNum = prompt("Enter a negative floating number:");
negNum = Number(negNum);

document.write("<h3>Question 2</h3>");
document.write("<p>");
document.write("Number: " + negNum + "<br>");
document.write("Round off value: " + Math.round(negNum) + "<br>");
document.write("Floor value: " + Math.floor(negNum) + "<br>");
document.write("Ceil value: " + Math.ceil(negNum));
document.write("</p>");

//   Q3. Absolute Value

var absNum = prompt("Enter a number:");
absNum = Number(absNum);

document.write("<h3>Question 3</h3>");
document.write("<p>");
document.write("Absolute value of " + absNum + " is " + Math.abs(absNum));
document.write("</p>");

//   Q4. Dice

var dice = Math.floor(Math.random() * 6) + 1;

document.write("<h3>Question 4</h3>");
document.write("<p>Random dice value: " + dice + "</p>");

//   Q5. Coin Toss

var toss = Math.floor(Math.random() * 2) + 1;

document.write("<h3>Question 5</h3>");
document.write("<p>");
if (toss === 1) {
  document.write("Random coin value: Heads");
} else {
  document.write("Random coin value: Tails");
}
document.write("</p>");

//   Q6. Random 1–100

var randomNum = Math.floor(Math.random() * 100) + 1;

document.write("<h3>Question 6</h3>");
document.write("<p>Random number between 1 and 100: " + randomNum + "</p>");

//   Q7. Weight

var weight = prompt("Enter your weight:");
var parsedWeight = parseFloat(weight);

document.write("<h3>Question 7</h3>");
document.write("<p>Your weight is: " + parsedWeight + " kgs</p>");

//   Q8. Secret Number

var secretNum = Math.floor(Math.random() * 10) + 1;
var userGuess = Number(prompt("Guess the secret number (1 to 10):"));

document.write("<h3>Question 8</h3>");
document.write("<p>");
if (userGuess === secretNum) {
  document.write("Congratulations! You guessed the secret number.");
} else {
  document.write("Sorry! The secret number was " + secretNum);
}
document.write("</p>");