'use strict';

var userName = prompt('Who goes there!?');

alert('Hello ' + userName + ', see if you can pass my test.');

var devNameGuess = prompt('Who do you think I am?').toLowerCase();
	//keeping track of the correctness of the answers as booleans
var boolAnswer1
	
	//QUESTION 1
if(devNameGuess === 'dustin' || devNameGuess === 'dustin mundy' ){
	//CORRECT!
	alert('Correct! My name is Dustin! You may pass!')
	boolAnswer1 = true
	
}else if(devNameGuess === 'vergil' || devNameGuess === 'vergilprime' ){
	//CORRECT!
	alert('Okay, that\'s my online moniker. You may pass.')
	boolAnswer1 = true
	
}else{
	//INCORRECT!
	alert('Nope. You have failed.')
	boolAnswer1 = false
	
}