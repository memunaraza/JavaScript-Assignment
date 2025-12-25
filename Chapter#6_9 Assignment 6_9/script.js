
//    Question 1

document.write("<div class='box'>");

var a = 10;

document.write("<b>Question 1:</b><br><br>");
document.write("The value of a is: " + a + "<br><br>");

document.write("The value of ++a is: " + ++a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a++ is: " + a++ + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of --a is: " + --a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + a-- + "<br>");
document.write("Now the value of a is: " + a);

document.write("</div>");

//    Question 2

document.write("<div class='box'>");

var a = 2;
var b = 1;

document.write("<b>Question 2:</b><br><br>");
document.write("a is: " + a + "<br>");
document.write("b is: " + b + "<br><br>");

var result = --a - --b + ++b + b--;

document.write("Result is: " + result + "<br><br>");
document.write("Explanation:<br>");
document.write("--a = 1<br>");
document.write("--a - --b = 1<br>");
document.write("--a - --b + ++b = 2<br>");
document.write("--a - --b + ++b + b-- = 3");

document.write("</div>");

//    Question 3

document.write("<div class='box'>");

var name = prompt("Enter your name");

document.write("<b>Question 3:</b><br><br>");
document.write("Hello " + name);

document.write("</div>");

//    Question 5

document.write("<div class='box'>");

var num = prompt("Enter a number for multiplication table", 5);

document.write("<b>Question 5:</b><br><br>");
document.write("Multiplication Table of " + num + "<br><br>");

document.write(num + " x 1 = " + (num * 1) + "<br>");
document.write(num + " x 2 = " + (num * 2) + "<br>");
document.write(num + " x 3 = " + (num * 3) + "<br>");
document.write(num + " x 4 = " + (num * 4) + "<br>");
document.write(num + " x 5 = " + (num * 5) + "<br>");
document.write(num + " x 6 = " + (num * 6) + "<br>");
document.write(num + " x 7 = " + (num * 7) + "<br>");
document.write(num + " x 8 = " + (num * 8) + "<br>");
document.write(num + " x 9 = " + (num * 9) + "<br>");
document.write(num + " x 10 = " + (num * 10));

document.write("</div>");

//    Question 6

document.write("<div class='box'>");

var subject1 = prompt("Enter first subject name");
var subject2 = prompt("Enter second subject name");
var subject3 = prompt("Enter third subject name");

var marks1 = prompt("Enter obtained marks of " + subject1);
var marks2 = prompt("Enter obtained marks of " + subject2);
var marks3 = prompt("Enter obtained marks of " + subject3);

var obtainedMarks = Number(marks1) + Number(marks2) + Number(marks3);
var percentage = (obtainedMarks / 300) * 100;

document.write("<b>Question 6: Marks Sheet</b><br><br>");

document.write("<table>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>100</td><td>" + marks1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>100</td><td>" + marks2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>100</td><td>" + marks3 + "</td></tr>");
document.write("<tr><th>Total</th><th>300</th><th>" + obtainedMarks + "</th></tr>");
document.write("<tr><th colspan='2'>Percentage</th><th>" + percentage + "%</th></tr>");
document.write("</table>");

document.write("</div>");