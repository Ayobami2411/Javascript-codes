/* 
Dawodu Ayobami Emmanuel Javascript codes*/
let age = prompt("Enter your age:");
age = Number(age); // Convert input from string to number

if (age >= 18) {
  console.log("You are old enough to drive.");
} else {
  let yearsLeft = 18 - age;
  console.log(`You are left with ${yearsLeft} year(s) to drive.`);
}


// age comparison code
let myAge = 25; //my age has been hard coded
let yourAge = prompt("Enter your age:");
yourAge = Number(yourAge); // Convert the input to a number

if (yourAge > myAge) {
  let diff = yourAge - myAge;
  console.log(`You are ${diff} year(s) older than me.`);
} else if (yourAge < myAge) {
  let diff = myAge - yourAge;
  console.log(`I am ${diff} year(s) older than you.`);
} else {
  console.log("We are the same age.");
}

// Comparison of two numbers
let a = 4;
let b = 3;
// Comparison of two numbers
if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} is less than ${b}`);
}

// You can check if a number is even in JavaScript using the modulo operator %, which gives the remainder of a division.

//
let month = prompt("Enter a month:");
month = month.toLowerCase(); // Convert to lowercase for case-insensitive comparison

if (month === "september" || month === "october" || month === "november") {
  console.log("The season is Autumn.");
} else if (month === "december" || month === "january" || month === "february") {
  console.log("The season is Winter.");
} else if (month === "march" || month === "april" || month === "may") {
  console.log("The season is Spring.");
} else if (month === "june" || month === "july" || month === "august") {
  console.log("The season is Summer.");
} else {
  console.log("Invalid month entered.");
}

let day = prompt("What is the day today?");
day = day.toLowerCase(); // Convert input to lowercase

// Capitalize first letter for display
let formattedDay = day.charAt(0).toUpperCase() + day.slice(1);

if (day === "saturday" || day === "sunday") {
  console.log(`${formattedDay} is a weekend.`);
} else if (
  day === "monday" || day === "tuesday" || day === "wednesday" ||
  day === "thursday" || day === "friday"
) {
  console.log(`${formattedDay} is a working day.`);
} else {
  console.log("Invalid day entered.");
}


