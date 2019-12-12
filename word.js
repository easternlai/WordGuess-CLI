var letterObj = require("./letter.js");

var wordObj = function(word){
    this.word = word;
    this.correctGuess = false;
    this.letters = [];
    this.wordGuessed = false;
    this.guessedChecker = function(){
        for(i = 0; i < this.letters.length; i++){
            if(this.letters[i].isChosen === false){
                 return;
            }
        }
        return this.wordGuessed = true;
    };
    this.lettersArrPop = function (){
        for(i=0;i<this.word.length; i++){
            this.letters.push(new letterObj(this.word[i]));
        }
    };
    this.wordPrint = function (){
        var wordString = "";
        for (i = 0; i < this.letters.length; i++){
            wordString += this.letters[i].letterDisplay();
        }
        return wordString;
    };
    this.letterGuess = function(userGuess){
        for (i = 0; i < this.letters.length; i++){
            if(this.letters[i].guessChecker(userGuess)){
                this.correctGuess = true;
            }
        }
        return this.correctGuess;
    };
}
module.exports = wordObj;


