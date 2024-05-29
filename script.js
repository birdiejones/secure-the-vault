/* 1. Clone repo to machine 
2. create index.html file
3. create script.js file
4. open html file with live server
5. create greeting string in script file
6. assign 3 variables using arithmatic
7. create an alert for the string and vault codes
8. commit then push to github
9. submit assignment as github link */

//here is my string for the text alert
const greeting =
  "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";
console.log(greeting);

// here are my 3 variables, console logged to check the math
const num1 = 10 * 1;
console.log(num1);
const num2 = 20 + 20;
console.log(num2);
const num3 = 59 - 20;
console.log(num3);

// The final alert is below, I couldn't figure out template literals T__T
alert(greeting + num1 + "-" + num2 + "-" + num3);
