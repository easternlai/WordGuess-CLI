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
        if(guess===this.letter){
            this.isChosen =true;
        }
    };
}

module.exports = letterObj;

// // constructor function for creating student objects
// var Student = function(name, favoriteSub, gpa) {
//     this.name = name;
//     this.favoriteSub = favoriteSub;
//     this.gpa = gpa;
//   };
  
//   // exporting our Student constructor
//   module.exports = Student;
  

// * **Letter.js**: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

//   * A string value to store the underlying character for the letter

//   * A boolean value that stores whether that letter has been guessed yet

//   * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

//   * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
