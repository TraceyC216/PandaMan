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


let playerGuess;
let maxWrong;
function wrongGuess() {
    let attempts = document.getElementById("attempts");
    attempts.textContent = "6";

 

}
wrongGuess()

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
    divDash.classList.add("letter")
    divDash.textContent = "___";
    letterDisplay.appendChild(divDash);
  }
}
function guessLtr(button, chooseLetter) {
let letterDisplay = document.getElementById("letterDisplay").children;
console.log(letterDisplay) 
  for (i = 0; i < playerGuess.length; i++) {
    if (playerGuess[i] === chooseLetter) {
     // console.log("this letter is yes")
     letterDisplay[i].textContent = chooseLetter
    } else {
        attempts.innerText -= 1;
      //console.log("this letter is no")
    }
  }
//put disable here

}

//create the keyboard (.fromCharCode)
const keyboard = document.querySelector("#letterBank");
for (let i = 97; i <= 122; i++) {
  const button = document.createElement("button");
  button.innerText = String.fromCharCode(i);
  keyboard.appendChild(button);
  button.addEventListener("click", (event) =>{
    console.log(event.target, String.fromCharCode(i))
    guessLtr(event.target, String.fromCharCode(i))}
  );
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
let life = 10;
//decrement the word array(?)

//win/loss notification - remember to include answer
