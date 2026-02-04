/* 1. Current Date & Time */
function showDate() {
  var date = new Date();
  document.write(date + "<br><br>");
}
showDate();

/* 2. Full Name Greeting */
function greet(first, last) {
  document.write("Hello " + first + " " + last + "<br><br>");
}
greet("Memuna", "Raza");

/* 3. Add Two Numbers */
function add(a, b) {
  return a + b;
}
document.write("Sum: " + add(5, 3) + "<br><br>");

/* 4. Calculator */
function calculator(num1, num2, operator) {
  if (operator == "+") {
    return num1 + num2;
  }
  if (operator == "-") {
    return num1 - num2;
  }
  if (operator == "*") {
    return num1 * num2;
  }
  if (operator == "/") {
    return num1 / num2;
  }
}
document.write("Calculator: " + calculator(10, 2, "*") + "<br><br>");

/* 5. Square */
function square(num) {
  return num * num;
}
document.write("Square: " + square(4) + "<br><br>");

/* 6. Factorial */
function factorial(num) {
  var result = 1;
  for (var i = 1; i <= num; i++) {
    result = result * i;
  }
  return result;
}
document.write("Factorial: " + factorial(5) + "<br><br>");

/* 7. Counting */
function counting(start, end) {
  for (var i = start; i <= end; i++) {
    document.write(i + " ");
  }
  document.write("<br><br>");
}
counting(1, 10);

/* 8. Hypotenuse (Nested) */
function calculateHypotenuse(base, perpendicular) {
  function square(num) {
    return num * num;
  }
  var hyp = square(base) + square(perpendicular);
  return Math.sqrt(hyp);
}
document.write("Hypotenuse: " + calculateHypotenuse(3, 4) + "<br><br>");

/* 9. Rectangle Area */
function area(width, height) {
  return width * height;
}
document.write("Area: " + area(5, 6) + "<br><br>");

/* 10. Palindrome */
function palindrome(word) {
  var reverse = "";
  for (var i = word.length - 1; i >= 0; i--) {
    reverse = reverse + word[i];
  }

  if (word == reverse) {
    document.write("Palindrome<br><br>");
  } else {
    document.write("Not Palindrome<br><br>");
  }
}
palindrome("madam");

/* 11. Capital First Letter */
function capitalWords(str) {
  var words = str.split(" ");
  var result = "";

  for (var i = 0; i < words.length; i++) {
    result += words[i][0].toUpperCase() + words[i].slice(1) + " ";
  }
  return result;
}
document.write(capitalWords("the quick brown fox") + "<br><br>");

/* 12. Longest Word */
function longestWord(str) {
  var words = str.split(" ");
  var longest = words[0];

  for (var i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}
document.write("Longest Word: " + longestWord("Web Development Tutorial") + "<br><br>");

/* 13. Count Letter */
function countLetter(str, letter) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] == letter) {
      count++;
    }
  }
  return count;
}
document.write("Count: " + countLetter("JSResourceS.com", "o") + "<br><br>");

/* 14. Circle */
function calcCircumference(radius) {
  document.write("Circumference: " + (2 * 3.14 * radius) + "<br>");
}

function calcArea(radius) {
  document.write("Area: " + (3.14 * radius * radius) + "<br>");
}

calcCircumference(5);
calcArea(5);