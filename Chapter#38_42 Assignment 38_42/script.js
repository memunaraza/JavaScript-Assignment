// 1 POWER
function power(){
let a=+document.getElementById("a").value;
let b=+document.getElementById("b").value;
let result=1;

for(let i=0;i<b;i++){
result*=a;
}

document.getElementById("powerRes").innerText=result;
}

// 2 LEAP
function leap(){
let y=+document.getElementById("year").value;
let res=(y%4===0 && y%100!==0)||y%400===0;
document.getElementById("leapRes").innerText=res?"Leap Year":"Not Leap Year";
}

// 3 TRIANGLE
function calcS(a,b,c){
return (a+b+c)/2;
}

function triangle(){
let a=+t1.value;
let b=+t2.value;
let c=+t3.value;

let s=calcS(a,b,c);
let area=Math.sqrt(s*(s-a)*(s-b)*(s-c));

triRes.innerText=area.toFixed(2);
}

// 4 MARKS
function average(a,b,c){
return (a+b+c)/3;
}

function percentage(a,b,c){
return ((a+b+c)/300)*100;
}

function mainFunction(){
let a=+m1.value;
let b=+m2.value;
let c=+m3.value;

let avg=average(a,b,c);
let per=percentage(a,b,c);

markRes.innerText="Avg: "+avg+" | %: "+per.toFixed(2);
}

// 5 CUSTOM INDEXOF
function customIndex(){
let str=text.value;
let ch=char.value;
let pos=-1;

for(let i=0;i<str.length;i++){
if(str[i]===ch){
pos=i;
break;
}
}

indexRes.innerText=pos;
}

// 6 DELETE VOWELS
function removeVowels(){
let str=sentence.value;
let res="";

for(let i=0;i<str.length;i++){
let c=str[i].toLowerCase();
if(!"aeiou".includes(c)){
res+=str[i];
}
}

vowelRes.innerText=res;
}