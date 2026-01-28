/* 1. Current Date & Time */
var now = new Date();
document.write("<h3>Q1</h3><div class='output'>" + now + "</div>");

/* 2. Current Month in Words */
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
alert(months[now.getMonth()]);

/* 3. First 3 Letters of Day */
var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
alert(days[now.getDay()]);

/* 4. Fun Day */
if(now.getDay() === 0 || now.getDay() === 6){
  document.write("<h3>Q4</h3><div class='output'>It's Fun day</div>");
}

/* 5. First or Last Days */
var date = now.getDate();
document.write("<h3>Q5</h3>");
if(date < 16){
  document.write("<div class='output'>First fifteen days of the month</div>");
}else{
  document.write("<div class='output'>Last days of the month</div>");
}

/* 6. Minutes since Jan 1, 1970 */
var minutes = now.getTime() / (1000 * 60);
document.write("<h3>Q6</h3><div class='output'>" + minutes + "</div>");

/* 7. AM or PM */
if(now.getHours() < 12){
  alert("Its AM");
}else{
  alert("Its PM");
}

/* 8. Last day of 2020 */
var laterDate = new Date("December 31, 2020");
document.write("<h3>Q8</h3><div class='output'>" + laterDate + "</div>");

/* 9. Days since Ramadan */
var ramadan = new Date("June 18, 2015");
var diffDays = Math.floor((now - ramadan) / (1000*60*60*24));
alert(diffDays + " days have passed since 1st Ramadan");

/* 10. Seconds since 2015 */
var ref = new Date("January 1, 2015");
var seconds = (now - ref) / 1000;
document.write("<h3>Q10</h3><div class='output'>" + seconds + "</div>");

/* 11. One hour ahead */
var oneHour = new Date();
oneHour.setHours(oneHour.getHours() + 1);
document.write("<h3>Q11</h3><div class='output'>" + oneHour + "</div>");

/* 12. 100 years back */
var backDate = new Date();
backDate.setFullYear(backDate.getFullYear() - 100);
alert(backDate);

/* 13. Birth year */
var age = prompt("Enter your age");
var birthYear = now.getFullYear() - age;
document.write("<h3>Q13</h3><div class='output'>Your birth year is " + birthYear + "</div>");

/* 14. K-Electric Bill */
var customerName = "ABC Customer";
var units = 410;
var charges = 16;
var lateFee = 350;

var net = units * charges;
var gross = net + lateFee;

document.write("<h3>Q14 - K-Electric Bill</h3>");
document.write("<div class='output'>");
document.write("Customer Name: " + customerName + "<br>");
document.write("Current Month: " + months[now.getMonth()] + "<br>");
document.write("Units: " + units + "<br>");
document.write("Charges per Unit: " + charges + "<br>");
document.write("Net Amount: " + net.toFixed(2) + "<br>");
document.write("Late Charges: " + lateFee.toFixed(2) + "<br>");
document.write("Gross Amount: " + gross.toFixed(2));
document.write("</div>");
