var inquirer = require("inquirer");
var wordObj = require("./word.js");
var wordsArr = ["javascript", "constructor"];
var currentWord;
var currentWordObj;
var maxGuesses = 5;
var guessLeft;
var keepGuess = false;
var validKey = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


startGame();

function startGame(){
    currentWord = getWord();
    currentWordObj = new wordObj(currentWord);
    currentWordObj.lettersArrPop();
    guessLeft = maxGuesses;
    console.log("*******************");
    console.log("*******************");
    console.log(" ");
    console.log("Welcome to Word Guess!");
    console.log("Here is your word:");
    console.log("*******************");
    console.log(" ");
    askQuestion();
}

function askQuestion(){
    console.log(" ");
    console.log("*******************");
    console.log(" ");
    console.log(currentWordObj.wordPrint());

    inquirer.prompt([
        {
            name:"userGuess",
            message: "Guess a letter"
        }
    ]).then(function(answers){
        if(validKey.includes(answers.userGuess)){
            keepGuess = currentWordObj.letterGuess(answers.userGuess);
            currentWordObj.guessedChecker();
            if(!currentWordObj.wordGuessed && guessLeft > 1){
                if(!keepGuess){
                guessLeft--;
                }
                keepGuess = false;
                currentWordObj.correctGuessIndex = false;
                askQuestion();
            }else if (currentWordObj.wordGuessed){
                console.log("*******************");
                console.log(" ");
                console.log(currentWordObj.word);
                console.log("You win!");
            }else{
                console.log("You are out of guesses!");
            }
        }else{
            console.log("Invalid entry, try again!!");
            askQuestion();
        }
    });
}

function getWord (){
    return wordsArr[Math.floor(Math.random() * wordsArr.length)];
}

