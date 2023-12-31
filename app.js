//create panda object
// const buildPanda() {
//     //call css images
// }

//PandaMan word list
const pandaWords = [
  "bamboo",
  "tire swing",
  "play",
  "panda bear",
  "red panda",
  "giant panda",
  "black and white",
  "somersault",
  "china",
  "endangered",
  "cub",
  "roll",
  "giant",
  "racoon",
  "claws",
  "black and white",
  "conservation",
  "habitat",
  "animal",
  "wwf logo",
  "tree climber",
];
pandaParts = [
  "#body",
  "#head",
  "#leftLeg",
  "#rightLeg",
  "#leftarm",
  "#rightArm",
];

//randomly select word from pandaWords array and display as letterDisplay
function beginGame() {
  let pandaWord = pandaWords[Math.floor(Math.random() * pandaWords.length)];
  playerGuess = pandaWord;
  console.log(pandaWord);
  //set up display in HTML
  let letterDisplay = document.getElementById("letterDisplay");
  letterDisplay.innerHTML = "";
  for (let i = 0; i < pandaWord.length; i++) {
    let divDash = document.createElement("div");
    divDash.classList.add("letter");
    divDash.textContent = "___";
    letterDisplay.appendChild(divDash);
  }
}

let livesLeft = 6;
let attempts = document.getElementById("attempts");
attempts.innerText = livesLeft;
let losses = (document.getElementById("panda").style.display = "none");

function pandaReveal() {
  for (let i = 0; i < pandaParts.length; i++) {
    if (playerGuess[i] !== chooseLetter) {
      pandaParts[i].style.display = "block";
    }
  }
}

function guessLtr(button, chooseLetter) {
  let letterDisplay = document.getElementById("letterDisplay").children;
  console.log(letterDisplay);
  let found = false;
  for (let i = 0; i < playerGuess.length; i++) {
    if (playerGuess[i] === chooseLetter) {
      // console.log("this letter is yes")
      letterDisplay[i].textContent = chooseLetter;
      found = true;
      attempts.textContent = "Congratulations! You win!";
    }
  }

  if (found === false) {
    livesLeft--;
  }


  attempts.innerText = livesLeft;
  if (livesLeft === 0) {
    attempts.textContent = `Sorry! The word was ${playerGuess}`;
  }

  button.disabled = true;
}

//create the keyboard (.fromCharCode)
const keyboard = document.querySelector("#letterBank");
for (let i = 97; i <= 122; i++) {
  const button = document.createElement("button");
  button.innerText = String.fromCharCode(i);
  keyboard.appendChild(button);
  button.addEventListener("click", (event) => {
    console.log(event.target, String.fromCharCode(i));
    guessLtr(event.target, String.fromCharCode(i));
  });
}
beginGame();

//don't forget to disbale button once selected
//check setAttribrute("disabled", "")

//build a variable and function for empty spaces will need to splice() to break down word and compare to button
//callback function or higher array?
function checkLetter() {
  //check how to use spice() check filter()
}

//make the guesses remaining

//decrement the word array(?)

//win/loss notification - remember to include answer
