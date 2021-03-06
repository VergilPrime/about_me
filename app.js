'use strict';

var userName = prompt('Halt! Who goes there!?');

alert('Hello ' + userName + ', see if you can pass my test. You will be graded.');

/**************************************************************
*   This quiz is designed to kick the player to a             *
*   random page in the case that they get 4 wrong answers.    *
**************************************************************/
//----Create Scoreboard
var scoreboard = {
  userCorrectness1: false,
  userCorrectness2: false,
  userCorrectness3: false,
  userCorrectness4: false,
  userCorrectness5: false,
  userTriesRemaining6: 0,
  userTriesRemaining7: 0
};
var complete = false;
var userAnswer;
function calculateScore(){
  var totalScore = 0;
  for(var i = 5; i > 0; i--) {
    var currentProperty = 'userCorrectness' + i;
    if(scoreboard[currentProperty]){
      totalScore += 2;
    }
  }
  totalScore += scoreboard.userTriesRemaining6;
  totalScore += scoreboard.userTriesRemaining7;
  alert('Your score is currently ' + totalScore + '/20');
}
function question1(){
  complete = false;
  while(complete === false){
    userAnswer = prompt('Do I paint?').toLowerCase();
    console.log('Question 1 ansered: ' + userAnswer);
    if(userAnswer === 'y' || userAnswer === 'ye' || userAnswer === 'yes') {
      console.log('Answer was correct');
      //----Answer Pass
      scoreboard.userCorrectness1 = true;
      alert('Correct! I love to paint controllers and stuff. Two points!');
      complete = true;

    }else if(userAnswer === 'n' || userAnswer === 'no') {
      console.log('Answer was not correct');
      //----Answer Fail
      alert('Brrrt. I love to paint whatever i can get my hands on.');
      complete = true;

    }else{
      console.log('Answer was invalid');
      //----Answer invalid
      alert('That\'s not a valid response.');

    }
  }
}
function question2(){
  complete = false;
  while(complete === false){
    userAnswer = prompt('Do I dance?').toLowerCase();
    if(userAnswer === 'n' || userAnswer === 'no') {
      //----Answer Pass
      scoreboard.userCorrectness2 = true;
      alert('Correct! I have two left feet. Two points!');
      complete = true;
    }else if(userAnswer === 'y' || userAnswer === 'ye' || userAnswer === 'yes') {
      //----Answer Fail
      alert('Brrrt. I am too out of shape to dance.');
      complete = true;
    }else{
      console.log('Answer wad invalid');
      //----Answer invalid
      alert('That\'s not a valid response.');
    }
  }
}
function question3(){
  complete = false;
  while(complete === false){
    userAnswer = prompt('Do I climb?').toLowerCase();
    if(userAnswer === 'y' || userAnswer === 'ye' || userAnswer === 'yes') {
      //----Answer Pass
      scoreboard.userCorrectness3 = true;
      alert('Correct! It\'s been a while but I love rock climbing. Two points!');
      complete = true;
    }else if(userAnswer === 'n' || userAnswer === 'no') {
      //----Answer Fail
      alert('Brrrt. Rock climbing is my favorite sport.');
      complete = true;
    }else{
      console.log('Answer wad invalid');
      //----Answer invalid
      alert('That\'s not a valid response.');
    }
  }
}
function question4(){
  complete = false;
  while(complete === false){
    userAnswer = prompt('Am I cheese?').toLowerCase();
    if(userAnswer === 'n' || userAnswer === 'no') {
      //----Answer Pass
      alert('Correct! I am not cheese. Two points!');
      complete = true;
    }else if(userAnswer === 'y' || userAnswer === 'ye' || userAnswer === 'yes') {
      //----Answer Cheese
      alert('Correct! I am 70% cheese by volume. Two points!');
      complete = true;
    }else{
      console.log('Answer wad invalid');
      //----Answer invalid
      alert('That\'s not a valid response.');
    }
  }
  scoreboard.userCorrectness4 = true;
}
function question5(){
  complete = false;
  while(complete === false){
    userAnswer = prompt('EXPLOSIONS?!').toLowerCase();
    if(userAnswer === 'y' || userAnswer === 'ye' || userAnswer === 'yes') {
      //----Answer Pass
      alert('YYYYEESSS!!!!! YOU\'RE AWESOME!!!.');
      complete = true;
    }else if(userAnswer === 'n' || userAnswer === 'no') {
      //----Answer Fail
      alert('Well fine then.');
      complete = true;
    }else{
      console.log('Answer wad invalid');
      //----Answer invalid
      alert('That\'s not a valid response.');
    }
  }
  scoreboard.userCorrectness5 = true;
}
function question6(){
  //----Come up with a Number
  var randomNumber = 3;
  //----Loop until Tries run out
  scoreboard.userTriesRemaining6 = 6;
  while(scoreboard.userTriesRemaining6 > 0){
    //----Question 6 (Number Guesser)
    userAnswer = parseInt(prompt('What number am I thinking of? (between 1 and 10)'));
    if(userAnswer === randomNumber) {
      //----Answer Pass
      alert('Correct! You must have ESPN.');
      break;
    }else{
      //----Answer Fail
      scoreboard.userTriesRemaining6--;
      if(!scoreboard.userTriesRemaining6){
        alert('Nope! Out of tries!');
        break;
      }
      alert('Nope! Try again!');
    }
  }
}
function question7(){
  //---- Question 7 (String Matcher)
  scoreboard.userTriesRemaining7 = 4;
  while(scoreboard.userTriesRemaining7 > 0){
    userAnswer = prompt('What is the name of my cat?').toLowerCase();
    if(userAnswer === 'amber') {
      //----Answer Pass
      alert('Correct! My Kitty is a Maine Coon named Amber.');
      break;
    }else{
      //----Answer Fail
      scoreboard.userTriesRemaining7--;
      if(!scoreboard.userTriesRemaining7){
        alert('Nope! Out of guesses!');
        break;
      }
      alert('Nope! Guess again!');
    }
  }
}
question1();
calculateScore();
question2();
calculateScore();
question3();
calculateScore();
question4();
calculateScore();
question5();
calculateScore();
question6();
calculateScore();
question7();
calculateScore();
