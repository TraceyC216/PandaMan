//create panda object
// const buildPanda() {
//     //call css images
// }

//PandaMan word list
const pandaWords = ["bamboo", "tire swing", "play", "panda bear", "red panda", "giant panda", "black and white", "somersault", "china",
 "endangered", "cub", "roll", "giant", "racoon",  "claws", "black and white", "conservation", "habitat", "animal", "wwf logo", "tree climber",]
    
    

//build an array for choosing letters -- use forEach?
const chooseLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ']
//using QuerySelectorAll create a for loop to iterate over the word array comparing the chooseLetter value being true to the letter in the word

//randomly select word from pandaWords array and display as letterDisplay
function beginGame() {
    return pandaWords[Math.floor(Math.random() * pandaWords.length)];
    //for(let i = 0; i < pandaWords.length; i++) {
    let pandaWords = document.getElementById("letterDisplay").innerHTML = " "
 } //}
//console.log(beginGame(pandaWords));

let wordPlay = document.querySelectorAll(".keyboard")
//if true .fill() the div with the appropriate letter


//don't forget to disbale button once selected


//build a variable and function for empty spaces will need to splice() to break down word and compare to button
//callback function or higher array?
function checkLetter(){
//check how to use spice() check filter()
}


//make the guesses remaining 
//decrement the word array(?)


//win/loss notification - remember to include answer