  // Q1
  document.write("<div class='card'>");
  document.write("<span class='tag'>Q1</span>");
  document.write("<h2>Empty Multidimensional Array</h2>");
  document.write("<div class='concept'>A multidimensional array contains arrays inside another array.</div>");
  var emptyArray = [[], []];
  document.write("<div class='output'>Created array: [ [], [] ]</div>");
  document.write("</div>");

  // Q2
  document.write("<div class='card'>");
  document.write("<span class='tag'>Q2</span>");
  document.write("<h2>Matrix (2D Array)</h2>");
  document.write("<div class='concept'>A matrix stores values in rows and columns.</div>");
  var matrix = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
  ];
  document.write("<div class='output'>");
  for (var i = 0; i < matrix.length; i++) {
    document.write("Row " + (i+1) + ": " + matrix[i] + "<br>");
  }
  document.write("</div></div>");

  // Q3
  document.write("<div class='card'>");
  document.write("<span class='tag'>Q3</span>");
  document.write("<h2>Counting (1 to 10)</h2>");
  document.write("<div class='concept'>For loop repeats code a fixed number of times.</div>");
  document.write("<div class='output'>");
  for (var i = 1; i <= 10; i++) {
    document.write(i + " ");
  }
  document.write("</div></div>");

  // Q4
  document.write("<div class='card'>");
  document.write("<span class='tag'>Q4</span>");
  document.write("<h2>Multiplication Table</h2>");
  document.write("<div class='concept'>User input combined with loop generates table.</div>");
  var table = prompt("Enter table number");
  var length = prompt("Enter table length");
  document.write("<div class='output'>");
  for (var i = 1; i <= length; i++) {
    document.write(table + " x " + i + " = " + (table * i) + "<br>");
  }
  document.write("</div></div>");

  // Q5
  document.write("<div class='card'>");
  document.write("<span class='tag'>Q5</span>");
  document.write("<h2>Loop Through Array</h2>");
  document.write("<div class='concept'>Array elements are accessed using index numbers.</div>");
  var fruits = ["apple","banana","mango","orange","strawberry"];
  document.write("<div class='output'>");
  for (var i = 0; i < fruits.length; i++) {
    document.write("Index " + i + ": " + fruits[i] + "<br>");
  }
  document.write("</div></div>");

  // Q6
  document.write("<div class='card'>");
  document.write("<span class='tag'>Q6</span>");
  document.write("<h2>Number Series</h2>");
  document.write("<div class='concept'>Changing loop conditions creates different patterns.</div>");
  document.write("<div class='output'>");
  document.write("<b>Even Numbers:</b><br>");
  for (var i = 0; i <= 20; i += 2) document.write(i + " ");
  document.write("<br><br><b>Odd Numbers:</b><br>");
  for (var i = 1; i < 20; i += 2) document.write(i + " ");
  document.write("</div></div>");

  // Q7
  document.write("<div class='card'>");
  document.write("<span class='tag'>Q7</span>");
  document.write("<h2>Search in Array</h2>");
  document.write("<div class='concept'>Each element is checked one by one using a loop.</div>");
  var items = ["cake","apple pie","cookie","chips","patties"];
  var searchItem = prompt("Search item").toLowerCase();
  var found = false;
  for (var i = 0; i < items.length; i++) {
    if (items[i] === searchItem) found = true;
  }
  document.write("<div class='output'>");
  document.write(found ? "Item FOUND in array ✅" : "Item NOT FOUND ❌");
  document.write("</div></div>");

  // Q8 & Q9
  document.write("<div class='card'>");
  document.write("<span class='tag'>Q8 & Q9</span>");
  document.write("<h2>Largest & Smallest Number</h2>");
  document.write("<div class='concept'>Values are compared to find maximum and minimum.</div>");
  var numbers = [24,53,78,91,12];
  var max = numbers[0];
  var min = numbers[0];
  for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) max = numbers[i];
    if (numbers[i] < min) min = numbers[i];
  }
  document.write("<div class='output'>Largest: " + max + "<br>Smallest: " + min + "</div>");
  document.write("</div>");
