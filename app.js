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
//----Question 1
var userAnswer = prompt('Do I paint?').toLowerCase;

if(userAnswer === 'y' || userAnswer === 'ye' || userAnswer === 'yes') {
  //----Answer Pass
  scoreboard[userCorrectness1] = true;
  alert('Correct! I love to paint controllers and stuff. Two points!');

}else if(userAnswer === 'n' || userAnswer === 'no') {
  //----Answer Fail
  alert('Brrrt. I love to paint whatever i can get my hands on.');

}

//----Calculate Score
var totalScore = 0;

for(var i = 5; i > 0; i--) {
  var currentProperty = 'userCorrectness' + i;
  if(scoreboard[currentProperty]){
    totalScore += 2;
  }
}

totalScore += scoreboard[userTriesRemaining6];
totalScore += scoreboard[userTriesRemaining7];
alert('Your score is currently ' + totalScore + '/22');

//----Question 4
userAnswer = prompt('Do I dance?');

if(userAnswer === 'n' || userAnswer === 'no') {
  //----Answer Pass
  alert('Correct! I have two left feet. Two points!');

}else if(userAnswer === 'y' || userAnswer === 'ye' || userAnswer === 'yes') {
  //----Answer Fail
  alert('Brrrt. I am too out of shape to dance.');
}

//----Calculate Score
totalScore = 0;

for(i = 5; i > 0; i--) {
  currentProperty = 'userCorrectness' + i;
  if(scoreboard[currentProperty]){
    totalScore += 2;
  }
}

totalScore += scoreboard[userTriesRemaining6];
totalScore += scoreboard[userTriesRemaining7];
alert('Your score is currently ' + totalScore + '/22');



//----Question 2
userAnswer = prompt('Do I climb?');

if(userAnswer === 'y' || userAnswer === 'ye' || userAnswer === 'yes') {
  //----Answer Pass
  alert('Correct! It\'s been a while but I love rock climbing. Two points!');

}else if(userAnswer === 'n' || userAnswer === 'no') {
  //----Answer Fail
  alert('Brrrt. Rock climbing is my favorite sport.');
}

//----Calculate Score
totalScore = 0;

for(i = 5; i > 0; i--) {
  currentProperty = 'userCorrectness' + i;
  if(scoreboard[currentProperty]){
    totalScore += 2;
  }
}

totalScore += scoreboard[userTriesRemaining6];
totalScore += scoreboard[userTriesRemaining7];
alert('Your score is currently ' + totalScore + '/22');


//----Question 3
userAnswer = prompt('Am I cheese?');

if(userAnswer === 'n' || userAnswer === 'no') {
  //----Answer Pass
  alert('Correct! I am not cheese. Two points!');

}else if(userAnswer === 'y' || userAnswer === 'ye' || userAnswer === 'yes') {
  //----Answer Cheese
  alert('Correct! I am 70% cheese by volume. Two points!');
}

//----Calculate Score
totalScore = 0;

for(i = 5; i > 0; i--) {
  currentProperty = 'userCorrectness' + i;
  if(scoreboard[currentProperty]){
    totalScore += 2;
  }
}

totalScore += scoreboard[userTriesRemaining6];
totalScore += scoreboard[userTriesRemaining7];
alert('Your score is currently ' + totalScore + '/22');


//----Question 5
userAnswer = prompt('EXPLOSIONS?!');

if(userAnswer === 'y' || userAnswer === 'ye' || userAnswer === 'yes') {
  //----Answer Pass
  alert('YYYYEESSS!!!!! YOU\'RE AWESOME!!!.');

}else if(userAnswer === 'n' || userAnswer === 'no') {
  //----Answer Fail
  alert('Well fine then.');
}

//----Calculate Score
totalScore = 0;

for(i = 5; i > 0; i--) {
  currentProperty = 'userCorrectness' + i;
  if(scoreboard[currentProperty]){
    totalScore += 2;
  }
}

totalScore += scoreboard[userTriesRemaining6];
totalScore += scoreboard[userTriesRemaining7];
alert('Your score is currently ' + totalScore + '/22');


//----Come up with a Number
var randomNumber = round(random(1,10));
//----Loop until Tries run out

while(scoreboard[userTriesRemaining6] > 0){
  //----Question 6 (Number Guesser)
  userAnswer = parseInt(prompt('What number am I thinking of? (between 1 and 10)'));

  if(userAnswer === randomNumber) {
    //----Answer Pass
    alert('Correct! You must have ESPN.');
    break;

  }else{
    //----Answer Fail
    scoreboard[userTriesRemaining6]--;

    if(!scoreboard[userTriesRemaining6]){
      alert('Nope! Out of tries!');
      break;
    }
    alert('Nope! Try again!');
    randomNumber = round(random(1,10));
  }
}

//----Calculate Score
totalScore = 0;

for(i = 5; i > 0; i--) {
  currentProperty = 'userCorrectness' + i;
  if(scoreboard[currentProperty]){
    totalScore += 2;
  }
}

totalScore += scoreboard[userTriesRemaining6];
totalScore += scoreboard[userTriesRemaining7];
alert('Your score is currently ' + totalScore + '/22');


//---- Question 7 (String Matcher)
while(scoreboard[userTriesRemaining7] > 0){
  userAnswer = prompt('What is the name of my cat?').toLowerCase;

  if(userAnswer === 'amber') {
    //----Answer Pass
    alert('Correct! My Kitty is a Maine Coon named Amber.');
    break;

  }else{
    //----Answer Fail
    scoreboard[userTriesRemaining7]--;

    if(!scoreboard[userTriesRemaining7]){
      alert('Nope! Out of guesses!');
      break;
    }
    alert('Nope! Guess again!');
    randomNumber = round(random(1,10));
  }
}

//----Calculate Score
totalScore = 0;

for(i = 5; i > 0; i--) {
  currentProperty = 'userCorrectness' + i;
  if(scoreboard[currentProperty]){
    totalScore += 2;
  }
}

totalScore += scoreboard[userTriesRemaining6];
totalScore += scoreboard[userTriesRemaining7];
alert('Your final score is ' + totalScore + '/22');
