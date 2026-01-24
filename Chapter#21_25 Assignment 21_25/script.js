/* 1 */
var firstName = prompt("Enter First Name");
var lastName = prompt("Enter Last Name");
var fullName = firstName + " " + lastName;
document.write("<div class='box'>1. Hello <span>" + fullName + "</span></div>");

/* 2 */
var mobile = prompt("Enter your favorite mobile model");
document.write("<div class='box'>2. Length: <span>" + mobile.length + "</span></div>");

/* 3 */
var word = "Pakistani";
document.write("<div class='box'>3. Index of n: <span>" + word.indexOf("n") + "</span></div>");

/* 4 */
var text = "Hello World";
document.write("<div class='box'>4. Last index of l: <span>" + text.lastIndexOf("l") + "</span></div>");

/* 5 */
document.write("<div class='box'>5. Character at index 3: <span>" + word.charAt(3) + "</span></div>");

/* 6 */
var fullName2 = firstName.concat(" ", lastName);
document.write("<div class='box'>6. concat(): <span>" + fullName2 + "</span></div>");

/* 7 */
var city = "Hyderabad";
document.write("<div class='box'>7. Replace city: <span>" + city.replace("Hyder","Islam") + "</span></div>");

/* 8 */
var msg = "Ali and Sami are best friends. They play cricket and football together.";
document.write("<div class='box'>8. Replace and: <span>" + msg.replace(/and/g,"&") + "</span></div>");

/* 9 */
var str = "472";
var num = Number(str);
document.write("<div class='box'>9. Value: <span>" + num + "</span> Type: <span>" + typeof num + "</span></div>");

/* 10 */
var cap = prompt("Enter text for capital letters");
document.write("<div class='box'>10. Capital: <span>" + cap.toUpperCase() + "</span></div>");

/* 11 */
var title = prompt("Enter text for title case");
var words = title.split(" ");
var result = "";
for(var i=0;i<words.length;i++){
    result += words[i].charAt(0).toUpperCase() + words[i].slice(1) + " ";
}
document.write("<div class='box'>11. Title Case: <span>" + result + "</span></div>");

/* 12 */
var num2 = 35.36;
document.write("<div class='box'>12. Remove dot: <span>" + num2.toString().replace(".","") + "</span></div>");

/* 13 */
var username = prompt("Enter username");
var check = true;
for(var i=0;i<username.length;i++){
    var code = username.charCodeAt(i);
    if(code==33 || code==44 || code==46 || code==64){
        check = false;
    }
}
document.write("<div class='box'>13. Username: <span>" + (check?"Valid":"Invalid") + "</span></div>");

/* 14 */
var items = ["cake","apple pie","cookie","chips","patties"];
var search = prompt("Search item").toLowerCase();
var found = false;
for(var i=0;i<items.length;i++){
    if(items[i]==search){
        found = true;
    }
}
document.write("<div class='box'>14. Search Result: <span>" + (found?"Found":"Not Found") + "</span></div>");

/* 15 */
var password = prompt("Enter password");
var valid = true;
if(password.length < 6 || !isNaN(password[0])){
    valid = false;
}
document.write("<div class='box'>15. Password: <span>" + (valid?"Valid":"Invalid") + "</span></div>");

/* 16 */
var uni = "University of Karachi";
var arr = uni.split(" ");
document.write("<div class='box'>16. Array:<br><span>" + arr.join("<br>") + "</span></div>");

/* 17 */
var input = prompt("Enter any text");
document.write("<div class='box'>17. Last Character: <span>" + input.charAt(input.length-1) + "</span></div>");

/* 18 */
var sen = "The quick brown fox jumps over the lazy dog";
var count = sen.toLowerCase().split("the").length-1;
document.write("<div class='box'>18. Occurrence of 'the': <span>" + count + "</span></div>");























