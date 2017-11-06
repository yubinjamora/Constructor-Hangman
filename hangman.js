var inquirer = require("inquirer");

var drinks = require("./word.js");

console.log("Welcome to Drink Hangman!");
console.log("Guess a letter of the name of a drink");
console.log("Goodluck!");
console.log("-----------------------------");

prompt.start();

game = {
    drinks: ["espresso", "orange juice", "green tea", "milk", "coke", "gatorade", "water"];
    wins: 0,
    guessRemaining: 10,
    currentWord: null,

    start: function(word) {
        this.resetGame();
        this.currentWord = new words(this.drinks[Math.floor(Math.random()* this.drinks.length)]);
    }


}