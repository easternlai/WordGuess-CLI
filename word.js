var letterObj = require("./letter.js");

var wordObj = function(word){
    this.word = word;
    this.letters = [];
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
            this.letters[i].guessChecker(userGuess);
        }
    };

}

module.exports = wordObj;







// // requiring our Student module exported from student.js
// var Student = require("./student.js");

// // constructor function for creating classroom objects
// var Classroom = function(profName, roomNum) {
//   // this.students will hold all of our student objects
//   this.students = [];
//   this.profName = profName;
//   this.roomNum = roomNum;
//   this.count = this.students.length;
//   // a method that creates a student using our Student constructor.
//   // It then pushes the new student object to this.students and updates this.numStudents
//   this.addStudent = function(name, favoriteSub, gpa) {
//     this.students.push(new Student(name, favoriteSub, gpa));
//     this.count++
//   };
//   // this method will tell you how many students are in the class
//   this.studentCount = function() {
//     return this.students.length;
//     // return this.count;
//   };
// };

// // exporting our Classroom constructor. We will require it in main.js
// module.exports = Classroom;


// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

//   * An array of `new` Letter objects representing the letters of the underlying word

//   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

//   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)