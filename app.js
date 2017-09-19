'use strict';

var userName = prompt('Who goes there!?');

alert('Hello ' + userName + ', see if you can pass my test.');

	//QUESTION 1
var devNameGuess = prompt('Who do you think I am?').toLowerCase();

if(devNameGuess === 'dustin' || devNameGuess === 'dustin mundy' ){
		//CORRECT!
	alert('Correct! My name is Dustin! You may pass!')
	
}else if(devNameGuess === 'vergil' || devNameGuess === 'vergilprime' ){
		//CORRECT!
	alert('Okay, that\'s my online moniker. You may pass.')
	
}else{
		//INCORRECT!
	devNameGuess = prompt('Nope. Guess again.')
	
	if(devNameGuess === 'dustin' || devNameGuess === 'dustin mundy' ){
			//CORRECT!
		alert('Correct! My name is Dustin! You may pass!')
		
	}else if(devNameGuess === 'vergil' || devNameGuess === 'vergilprime' ){
			//CORRECT!
		alert('Okay, that\'s my online moniker. You may pass.')
		
	}else{
			//INCORRECT!
		devNameGuess = prompt('Nope. One more try?')
		
		if(devNameGuess === 'dustin' || devNameGuess === 'dustin mundy' ){
				//CORRECT!
			alert('Correct! My name is Dustin! You may pass!')
			
		}else if(devNameGuess === 'vergil' || devNameGuess === 'vergilprime' ){
				//CORRECT!
			alert('Okay, that\'s my online moniker. You may pass.')
			
		}else{
				//INCORRECT!
			alert('Nope. My name is Dustin Mundy! I can be found around the web using the moniker VergilPrime.')
			
		}
		
	}
	
}

	
	//QUESTION 2
var devJobGuess = prompt('What was my previous profession?').toLowerCase();
if(devJobGuess === 'security' || devJobGuess === 'security guard' || devJobGuess === 'guard'){
		//CORRECT!
	alert('Yes, I was a security guard before I moved here for about a year and a half.')
	boolAnswer2 = true
	
}else{
		//INCORRECT!
	alert('Nope. Nice try.')
	boolAnswer2 = false
	
}
	
	
	//QUESTION 3
if(devNameGuess === 'dustin' || devNameGuess === 'dustin mundy' ){
		//CORRECT!
	alert('')
	boolAnswer3 = true
	
}else{
		//INCORRECT!
	alert('')
	boolAnswer3 = false
	
}

	
	//QUESTION 4
if(devNameGuess === 'dustin' || devNameGuess === 'dustin mundy' ){
		//CORRECT!
	alert('')
	boolAnswer4 = true
	
}else{
		//INCORRECT!
	alert('')
	boolAnswer4 = false
	
}