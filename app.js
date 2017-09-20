'use strict';

//----Keep track of 'strikes'
var totalStrikes = 0;

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
//----Question 1
var userAnswer = prompt('Do I paint?').toLowerCase;

if(userAnswer === 'y' || userAnswer === 'ye' || userAnswer === 'yes') {
  //----Answer Pass
  scoreboard[userCorrectness1] = true
  alert('Correct! I love to paint controllers and stuff. Two points!');

}else if(userAnswer === 'n' || userAnswer === 'no') {
  //----Answer Fail
  alert('Brrrt. I love to paint whatever i can get my hands on.');

}

alert()

//----Question 4
userAnswer = prompt('Do I dance?');

  //----Answer Pass
alert('Correct! I have two left feet. Two points!');

  //----Answer Fail
alert('Brrrt. I am too out of shape to dance.');



//----Question 2
userAnswer = prompt('Do I climb?');

  //----Answer Pass
alert('Correct! It\'s been a while but I love rock climbing. Two points!');

  //----Answer Fail
alert('Brrrt. Rock climbing is my favorite sport.');


//----Question 3
userAnswer = prompt('Am I cheese?');

  //----Answer Pass
alert('Correct! I am not cheese. Two points!');

  //----Answer Cheese
alert('Correct! I am 70% cheese by volume. Two points!');


//----Question 5
userAnswer = prompt('EXPLOSIONS?!');

  //----Answer Pass
alert('YYYYEESSS!!!!! YOU\'RE AWESOME!!!.');

  //----Answer Fail
alert('Well fine then.');


//----Question 6 (Number Guesser)
userAnswer = prompt('What number am I thinking of? (between 1 and 10)');
//------Come up with a Number
var randomNumber = round(random(1,10))
//------Loop until Tries run out


  //----Answer Pass
alert('Correct! You must have ESPN.');

  //----Answer Fail


//---- Question 7 (String Matcher)
userAnswer = prompt('What is the name of my cat?');

  //----Answer Pass
alert('GET OUT OF MY MIND!!!');

  //----Answer Fail
