// Chapter #21-25 Question No-1

// var firstName = prompt("Enter your First Name")
// var lastName = prompt("Enter your last Name")
// var fullName = "greet"+" "+firstName+lastName;
// document.write(fullName)

// Chapter #21-25 Question No-2

// var str = "My facorite phone is:";
// var st2 =  "Samsung Galazy s6 Edge Plus";
// var len = "Length of string"
// var n = st2.length;
// document.write(str,st2,"</br>",len,n)

// Chapter #21-25 Question No-3

// var str = "Pakistani";
// var n = str.indexOf('n');
// document.write(str+("</br>")+n)


// Chapter #21-25 Question No-4

// var str = "Hello World";
// var n = str.lastIndexOf('l');
// document.write(str+("</br>")+n)

// Chapter #21-25 Question No-5

// var a = "Pakisttani"
// document.write(a.charAt(3))


// Chapter #21-25 Question No-6

// var firstName = "Muhammad";
// var lastName =  "Sherhoz";
// var fullName = firstName.concat(lastName);
// document.write(fullName)

// Chapter #21-25 Question No-7

// var a = "Hyderabad";
// var b = a.replace("Hyder","Islam");

// document.write(b)

// Chapter #21-25 Question No-8

// var a = "Ali & Sami are best friends. They play circket & football togather.";
// var b = a.replace(/&/g,"and")
// document.write(b)

// Chapter #21-25 Question No-9

// var a = "472";
// var b = a.toString()
// document.write(b)

// Chapter #21-25 Question No-10

// var a = prompt("Enter you input");
// var b = a.toUpperCase()
// document.write(b)

// Chapter #21-25 Question No-11

// var a = prompt("Enter you input");
// var b = a.toUpperCase()
// document.write(b)


// Chapter #21-25 Question No-12

// var num = 35.36;
// var without = num.toString().replace(".", "");
// console.log(without)

// Chapter #21-25 Question No-13



// Chapter #21-25 Question No-14

// var b = prompt("Search by user input")
// a = b.toLocaleLowerCase()
// var a = ["cake", "apple pie", "cookies", "chips", "patties"];
// for (var i = 0; i < a.length; i++) {
//     if (a[i] === b) {
//         document.write("cookies is available at index")
//     }
// }


// Chapter #21-25 Question No-15





// Chapter #21-25 Question No-16;


// var str = 'University of Karachi';
// var ar = str.split('');
// console.log( ar ); 


// Chapter #21-25 Question No-17;

// var a = "Pakistan";
// document.write(a.charAt(7))

// Chapter #21-25 Question No-18;


// function countOccurences(string, word) {
//     return string.split(word).length - 1;
//  }
//  var text="the quick brown fox jumps over the lazy dog"; 
//  var count=countOccurences(text,"the");
//  console.log(count)

// Chapter #26-30 Question No-1;

// var num = 3.45214;
// document.write(num)
// var round = Math.round(num)
// document.write("<br>" + round)
// var floor = Math.floor(num)
// document.write("<br>" + floor)
// var ceil = Math.ceil(num)
// document.write("<br>" + ceil)



// Chapter #26-30 Question No-2;

// var num = -2.673;
// document.write(num)
// var round = Math.round(num)
// document.write("<br>" + round)
// var floor = Math.floor(num)
// document.write("<br>" + floor)
// var ceil = Math.ceil(num)
// document.write("<br>" + ceil)


// Chapter #26-30 Question No-3;

// var a = -4;
// document.write("The absolute value of "+a+"is"+Math.abs(a))

// Chapter #26-30 Question No-4;

// var random = Math.floor(Math.random() * 6 + 1);
// document.write("random dice value:"+" "+random)


// Chapter #26-30 Question No-5;

// var headsuser = prompt("enter heads username");
// var tailsuser = prompt("enter tails username");

// var toss = Math.random() * 2

// var floor = Math.floor(toss)
// if (floor === 0) {
//     alert("Head" + " " + headsuser + "win the tos")
// } else {
//     alert("Tails" + " " + tailsuser + "win the toss")
// }

// Chapter #26-30 Question No-6;

// var random = Math.floor(Math.random(1) * 100 + 1);
// document.write("random number 1 and 100:"+" "+random)


// Chapter #26-30 Question No-7;





// Chapter #26-30 Question No-8;

// var user = +prompt("Enter a number between 1 and 10")
// var a = Math.random(1)*11;
// var b = a.toFixed(0)
// console.log(b)
// if(user===b){
//     alert("congratulate the user.")
// }else{
//     alert("Prevent this page from creating additional dialogs")
// }


// Chapter #31-34 Question No-1;

// var a = new Date();
// document.write(a)

// Chapter #31-34 Question No-2;


// var d = new Date();
// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";
// var n = month[11];
// document.write(n)


// Chapter #31-34 Question No-3;

// var a = new Date();
// var b = a.toString();
// var c = b.slice(0,3);
// alert(c)

// Chapter #31-34 Question No-4;


// var today = new Date();
//   var day = today.getDay();
//   var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
//   console.log("Today is : " + daylist[day] + ".");
// if(daylist[day]==="Saturday","Sunday"){
//     document.write("Its is Fun day")
// }


// Chapter #31-34 Question No-5;

// var today = new Date();
// var month = today.getMonth();
// var day = today.getDate();
// console.log(month)
// if (today.getMonth() < today.getDate(15)){
//     document.write("First fifteen days of the month")
// }


// Chapter #31-34 Question No-6;

// var today = new Date();
// document.write("Current Date; " + today);
// var getTime = today.getTime()
// console.log(getTime)
// document.write("<br>"+"Elapsed milliseconds since january 1,1970"+today.getMilliseconds())
// document.write("<br>"+"Elapsed minuts since 1, 1970: "+today.getMinutes())


// Chapter #31-34 Question No-7;


// var today = new Date();
// var time = today.getHours();
// console.log(time)
// if( time < 12 ){
//     document.write("its Pm")
// }else{
//     alert("its Am")
// }


// Chapter #31-34 Question No-8;

// var last = new Date(2019, 12, 29);
// console.log(last)


// Chapter #31-34 Question No-9;

// var dob = new Date (prompt("Enter your date of birth","january 1, 1970"));
// var dobmili = dob.getTime();
// var today = new Date();
// var todaymili = today.getTime()
// var diff = todaymili - dobmili;
// var accuage = Math.floor(diff/(1000*60*60*24*30*12))

// document.write(accuage*365+" "+"days have passed since 1st Ramdan, 2015")


// Chapter #31-34 Question No-10;


// var dob = new Date(prompt("Enter your date of birth", "january 1, 1970"));
// var dobmili = dob.getTime();
// var today = new Date();
// var todaymili = today.getTime()
// var diff = todaymili - dobmili;
// var accuage = Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12))

// document.write(accuage * 365 * 24 * 60 * 60 + " " + "days have passed since 1st Ramdan, 2015")


// Chapter #31-34 Question No-11;

// var dob = new Date()
// document.write(dob)
// var set = dob.setHours(10)
// console.log("<br>"+dob)

// Chapter #31-34 Question No-12;

// var dob = new Date()
// document.write(dob)
// var set = dob.setFullYear(1920)
// document.write("<br>"+dob)

// Chapter #31-34 Question No-13;

// var dob = new Date(prompt("Enter your date of birth", "january 1, 1970"));
// var dobmili = dob.getTime();
// var today = new Date();
// var todaymili = today.getTime()
// var diff = todaymili - dobmili;
// var accuage = Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12))
// document.write("Your Date of birth is "+dob)
// document.write("<br>"+"your age is "+accuage);

// Chapter #31-34 Question No-14;





// Chapter #35-38 Question No-1;
// function tellDate (){
//     var tellDate = new Date();
//     return tellDate ;
// }

// var g = tellDate();
// alert(g)


// Chapter #35-38 Question No-2;

// function name (a,b){
//     alert(a + b)
// }
// name("muhammad","sherhoz")


// Chapter #35-38 Question No-3;
// function num (a,b){
//     var z = a+b
//     return z;
// }
// var g = num(5,9);
// alert(g);

// Chapter #35-38 Question No-4;
// function calc(num1,opr,num2){
//     if(opr === "+"){
//     return num1 + num2
//     }
//     else if (opr === "-"){
//         return num1 - num2
//     }
//     else if (opr === "*"){
//         return num1 * num2
//     }
//     else if (opr === "/"){
//         return num1 / num2
//     }else{
//         return "incorrect operator!"
//     }
// }

// var result = calc (5,"-","4")
// var result1 = calc (4,"*","6")
// console.log(result)
// console.log(result1)

// Chapter #35-38 Question No-5;

// function square(number) {
//     return number * number;
//   }
//   var g = square(5,2)
// console.log(g)

// Chapter #35-38 Question No-6;
// function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   let n = 5;
//   answer = factorial(n)
//   console.log("The factorial of " + n + " is " + answer);

// Chapter #35-38 Question No-7;
