var letterObj = function (letter){
    this.letter = letter;
    this.isChosen = false;
    this.letterDisplay = function(){
        if (this.isChosen === true){
            return this.letter;
        }else{
            return "_";
        }
    };
    this.guessChecker = function(guess){
        var correctGuessLetter = false;
        if(guess===this.letter){
            this.isChosen =true;
            correctGuessLetter = true;
        }
        return correctGuessLetter;
    };
}

module.exports = letterObj;

