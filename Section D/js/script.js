console.log("javascript loaded");
var nameVar = "Jose";
var numVar = 5;

numVar = 25;


function myFirstFunction () {
  console.log("This is my first function!!");
}

function comparingNumbers(firstNum, secondNum) {
  console.log("First Number: " + firstNum + "\nSecond NUmber: " + secondNum);
  console.log("First number is greater than the second number: " + (firstNum > secondNum));
  console.log(numVar);
  firstNum = 11;
  secondNum = 12;
  console.log("First Number: " + firstNum + "\nSecond NUmber: " + secondNum);
  console.log("First number is greater than the second number: " + (firstNum > secondNum));
  numVar += 3;
  console.log("+3 NumVar: " + numVar);
  console.log("............");
};

comparingNumbers(2, 1);
numVar = numVar + 40;
comparingNumbers(12, 18);
console.log(numVar);
//console.log(firstNum);

//username info
function userInfo (firstName, lastName) {
  //console.log("My first name is " + firstName + " and my last name is " + lastName);
  return ("My first name is " + firstName + " and my last name is " + lastName)
}

console.log(userInfo("Jose", "Salas"));

console.log("Functions- no parameters no return, parameters no return, no parameters return, parameters return, anonymous-call back");
