//User Input Validation using Do-While Loop
let number;
do {
  number = parseInt(prompt("Enter a number between 1 and 10:"));
} while (number < 1 || number > 10);

console.log("Valid number entered:", number);
