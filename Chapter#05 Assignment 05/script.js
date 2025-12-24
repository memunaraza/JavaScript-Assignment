// --- Task 1 & 2: Basic Arithmetic ---
var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br>");

// Subtraction, Multiplication, Division & Modulus
document.write("Subtraction: " + (num1 - num2) + "<br>");
document.write("Multiplication: " + (num1 * num2) + "<br>");
document.write("Division: " + (num1 / num2) + "<br>");
document.write("Modulus: " + (num1 % num2) + "<br><br>");

// --- Task 3: Variable Manipulation ---
var myVar;
document.write("Value after variable declaration is: " + myVar + "<br>");
myVar = 5;
document.write("Initial value: " + myVar + "<br>");
myVar++;
document.write("Value after increment is: " + myVar + "<br>");
myVar += 7;
document.write("Value after addition is: " + myVar + "<br>");
myVar--;
document.write("Value after decrement is: " + myVar + "<br>");
var remainder = myVar % 3;
document.write("The remainder is: " + remainder + "<br><br>");

// --- Task 4: Movie Tickets ---
var ticketPrice = 600;
var totalTickets = 5;
var totalCost = ticketPrice * totalTickets;
document.write("Total cost to buy " + totalTickets + " tickets to a movie is " + totalCost + "PKR <br><br>");

// --- Task 5: Multiplication Table ---
var tableNum = 4;
document.write("Table of " + tableNum + "<br>");
for(var i = 1; i <= 10; i++) {
    document.write(tableNum + " x " + i + " = " + (tableNum * i) + "<br>");
}
document.write("<br>");

// --- Task 6: Temperature Converter ---
var celsius = 25;
var fahrenheitFromC = (celsius * 9 / 5) + 32;
document.write(celsius + "°C is " + fahrenheitFromC + "°F <br>");

var fahrenheit = 70;
var celsiusFromF = (fahrenheit - 32) * 5 / 9;
document.write(fahrenheit + "°F is " + celsiusFromF + "°C <br><br>");

// --- Task 7: Shopping Cart ---
var item1Price = 650, item1Qty = 3;
var item2Price = 100, item2Qty = 7;
var shippingCharges = 100;
var totalOrderCost = (item1Price * item1Qty) + (item2Price * item2Qty) + shippingCharges;
document.write("<b>Shopping Cart</b><br>");
document.write("Price of item 1 is " + item1Price + "<br>");
document.write("Quantity of item 1 is " + item1Qty + "<br>");
document.write("Price of item 2 is " + item2Price + "<br>");
document.write("Quantity of item 2 is " + item2Qty + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br>");
document.write("Total cost of your order is " + totalOrderCost + "<br><br>");

// --- Task 8: Percentage ---
var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;
document.write("<b>Marks Sheet</b><br>");
document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "% <br><br>");

// --- Task 9: Currency Converter ---
var totalPKR = (10 * 104.80) + (25 * 28);
document.write("<b>Currency in PKR</b><br>");
document.write("Total Currency in PKR: " + totalPKR + "<br><br>");

// --- Task 10: Sequence Calculation ---
var someNum = 10; 
var finalResult = ((someNum + 5) * 10) / 2;
document.write("Sequence Result (Add 5, Multiply 10, Divide 2): " + finalResult + "<br><br>");

// --- Task 11: Age Calculator ---
var currentYear = 2016;
var birthYear = 1992;
var estimatedAge = currentYear - birthYear;
document.write("<b>Age Calculator</b><br>");
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("Your Age is: " + estimatedAge + "<br><br>");

// --- Task 12: Geometrizer ---
var radiusValue = 20;
var circum = 2 * 3.142 * radiusValue;
var circleArea = 3.142 * (radiusValue * radiusValue);
document.write("<b>The Geometrizer</b><br>");
document.write("Radius of a circle: " + radiusValue + "<br>");
document.write("The circumference is: " + circum + "<br>");
document.write("The area is: " + circleArea + "<br><br>");

// --- Task 13: Lifetime Supply ---
var favSnack = "chocolate chip";
var ageNow = 15;
var ageMax = 65;
var amountPerDay = 3;
var supplyTotal = (ageMax - ageNow) * 365 * amountPerDay;
document.write("<b>The Lifetime Supply Calculator</b><br>");
document.write("Favourite Snack: " + favSnack + "<br>");
document.write("Current age: " + ageNow + "<br>");
document.write("Estimated Maximum Age: " + ageMax + "<br>");
document.write("Amount of snacks per day: " + amountPerDay + "<br>");
document.write("You will need " + supplyTotal + " " + favSnack + " to last you until the ripe old age of " + ageMax);