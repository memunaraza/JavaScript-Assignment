
// Qquestion 3
document.write("<h3>3. Declare and initialize a strings array</h3>");
var stringsArray = ["Apple", "Banana", "Mango"];
document.write(stringsArray + "<br><br>");

// Question 4
document.write("<h3>4. Declare and initialize a numbers array</h3>");
var numbersArray = [10, 20, 30, 40];
document.write(numbersArray + "<br><br>");

// Question 5
document.write("<h3>5. Declare and initialize a boolean array</h3>");
var booleanArray = [true, false, true];
document.write(booleanArray + "<br><br>");

// Question 6
document.write("<h3>6. Declare and initialize a mixed array</h3>");
var mixedArray = ["Ali", 25, true];
document.write(mixedArray + "<br><br>");

// Question 7
document.write("<h3>7. Qualifications in Pakistan</h3>");
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
for (var i = 0; i < qualifications.length; i++) {
  document.write((i + 1) + ") " + qualifications[i] + "<br>");
}
document.write("<br>");

// Question 8
document.write("<h3>8. Student Scores & Percentages</h3>");
var studentNames = ["Michael", "John", "Tony"];
var studentScores = [320, 230, 480];
var totalMarks = 500;

for (var i = 0; i < studentNames.length; i++) {
  var percentage = (studentScores[i] / totalMarks) * 100;
  document.write(
    "Score of " + studentNames[i] + " is " + studentScores[i] +
    ". Percentage: " + percentage + "%<br>"
  );
}
document.write("<br>");

// Question 9
document.write("<h3>9. Colors Array</h3>");
var colors = ["Red", "Green", "Blue"];
document.write(colors + "<br><br>");

var colorStart = prompt("What color do you want to add to the beginning?");
colors.unshift(colorStart);
document.write(colors + "<br><br>");

var colorEnd = prompt("What color do you want to add to the end?");
colors.push(colorEnd);
document.write(colors + "<br><br>");

colors.unshift("Purple", "Orange");
document.write(colors + "<br><br>");

colors.shift();
document.write(colors + "<br><br>");

colors.pop();
document.write(colors + "<br><br>");

var addIndex = +prompt("At which index you want to add color?");
var addColor = prompt("Enter color name");
colors.splice(addIndex, 0, addColor);
document.write(colors + "<br><br>");

var delIndex = +prompt("At which index you want to delete color?");
var delCount = +prompt("How many colors you want to delete?");
colors.splice(delIndex, delCount);
document.write(colors + "<br><br>");

// Question 10
document.write("<h3>10. Sorted Student Scores</h3>");
var scores = [320, 230, 480, 120];
scores.sort();
document.write(scores + "<br><br>");

// Question 11
document.write("<h3>11. Cities Array Copy</h3>");
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(0, 3);
document.write(selectedCities + "<br><br>");

// Question 12
document.write("<h3>12. Array Join</h3>");
var arr = ["This ", " is ", " my ", " cat"];
document.write(arr.join("") + "<br><br>");

// Question 13
document.write("<h3>13. FIFO (First In First Out)</h3>");
var fifo = [];
fifo.push("Keyboard");
fifo.push("Mouse");
fifo.push("Printer");

document.write("Out: " + fifo.shift() + "<br>");
document.write("Out: " + fifo.shift() + "<br>");
document.write("Out: " + fifo.shift() + "<br><br>");

// Question 14
document.write("<h3>14. LIFO (Last In First Out)</h3>");
var lifo = [];
lifo.push("Keyboard");
lifo.push("Mouse");
lifo.push("Printer");

document.write("Out: " + lifo.pop() + "<br>");
document.write("Out: " + lifo.pop() + "<br>");
document.write("Out: " + lifo.pop() + "<br><br>");

// Question 15
document.write("<h3>15. Phone Manufacturers</h3>");
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");
for (var i = 0; i < manufacturers.length; i++) {
  document.write("<option>" + manufacturers[i] + "</option>");
}
document.write("</select>");