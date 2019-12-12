# WordGuess-CLI

## Technologies Used

1. Javascript
2. Node JS
3. Axios
4. NPM
5. Git Bash
6. Constructors

## Program Description

This program presents user with a word and the user has five guesses to get the answer correct.  If the user guesses correct, the user does not have a guess subtracted.  Also, if the user selects number or multiple letters, the user does not have a guess subtracted.  

Here is a game flow if the user guesses the answer correctly.
![correct](https://github.com/easternlai/WordGuess-CLI/blob/master/game.JPG?raw=true)


Here is the game flow if the user selects an incorrect guess or losses.
![loss](hhttps://github.com/easternlai/WordGuess-CLI/blob/master/lost.JPG?raw=true)


## Use of Constructors
The code uses two constructors with one contructor, being used to populate an array in another constructor using one of the constructors builtin methods.  


```
this.letters = [];
lettersArrPop = function (){
        for(i=0;i<this.word.length; i++){
            this.letters.push(new letterObj(this.word[i]));
        }
    };
```


