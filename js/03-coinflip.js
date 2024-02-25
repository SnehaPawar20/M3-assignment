let coinflip = Math.round(Math.random());
let choice = prompt("Enter 'Heads' or 'Tails' :");
let result;

if (coinflip == 0) {
  result = "Heads";
  console.log("Result of coin flip is : ", result);
} else {
  result = "Tails";
  console.log("Result of coin flip is : ", result);
}

if (coinflip == 0 && choice == "Heads") {
  alert("The flip was heads and you chose heads...you win!");
} else if (coinflip == 0 && choice == "Tails") {
  alert("The flip was heads but you chose tails...you lose!");
} else if (coinflip == 1 && choice == "Heads") {
  alert("The flip was tails but you chose heads...you lose!");
} else if (coinflip == 1 && choice == "Tails") {
  alert("The flip was tails and you chose tails...you win!");
} else {
  alert("You Entered wrong data..");
}
