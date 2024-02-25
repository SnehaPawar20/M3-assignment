let num1 = parseInt(prompt("Enter first integer number:"));
let num2 = parseInt(prompt("Enter another integer number:"));

if (num1 == num2) {
  document.write("Both numbers are equal...");
} else if (num1 > num2) {
  document.write(`Greater number is ${num1}`);
} else {
  document.write(`Greater number is ${num2}`);
}
