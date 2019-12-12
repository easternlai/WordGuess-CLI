var inquirer = require("inquirer");
var wordObj = require("./word.js");
var wordsArr = ["javascript", "constructor"];
var currentWord;
var currentWordObj;
var maxGuesses = 5;
var guessLeft;
var correctGuessIndex = false;

startGame();

function startGame(){
    currentWord = getWord();
    currentWordObj = new wordObj(currentWord);
    currentWordObj.lettersArrPop();
    guessLeft = maxGuesses;
    
    askQuestion();
}

function askQuestion(){
    console.log(currentWordObj.wordPrint());

    inquirer.prompt([
        {
            name:"userGuess",
            message: "Guess a letter"
        }
    ]).then(function(answers){
        correctGuessIndex = currentWordObj.letterGuess(answers.userGuess);
        console.log(correctGuessIndex);
        currentWordObj.guessedChecker();
        if(!currentWordObj.wordGuessed && guessLeft > 0){
            guessLeft--;
            askQuestion();
        }else if (currentWordObj.wordGuessed){
            console.log("You win!");
        }else{
            console.log("You are out of guesses!");
        }
    });
}

function getWord (){
    return wordsArr[Math.floor(Math.random() * wordsArr.length)];
}

