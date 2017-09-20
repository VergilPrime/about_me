'use strict';

//----Keep track of "strikes"
var strikes = 0;

var userName = prompt('Who goes there!?');

alert('Hello ' + userName + ', see if you can pass my test.');

//----QUESTION 1
var devNameGuess = prompt('Who do you think I am?').toLowerCase();

if(devNameGuess === 'dustin' || devNameGuess === 'dustin mundy' ){
//----CORRECT!
  alert('Correct! My name is Dustin! You may pass!');

}else if(devNameGuess === 'vergil' || devNameGuess === 'vergilprime' ){
//----CORRECT!
  alert('Okay, that\'s my online moniker. You may pass.');

}else{
//----INCORRECT!
  strikes++
  devNameGuess = prompt('Nope. Guess again.');

  if(devNameGuess === 'dustin' || devNameGuess === 'dustin mundy' ){
    //----CORRECT!
    alert('Correct! My name is Dustin! You may pass!');

  }else if(devNameGuess === 'vergil' || devNameGuess === 'vergilprime' ){
    //----CORRECT!
    alert('Okay, that\'s my online moniker. You may pass.');

  }else{
    //----INCORRECT!
    strikes++;
    devNameGuess = prompt('Nope. One more try?');

    if(devNameGuess === 'dustin' || devNameGuess === 'dustin mundy' ){
      //----CORRECT!
      alert('Correct! My name is Dustin! You may pass!');

    }else if(devNameGuess === 'vergil' || devNameGuess === 'vergilprime' ){
      //CORRECT!
      alert('Okay, that\'s my online moniker. You may pass.');

    }else{
      //INCORRECT!
      strikes++;
      alert('Nope. My name is Dustin Mundy! I can be found around the web using the moniker VergilPrime.');

    }
  }
}

//----QUESTION 2
var devJobGuess = prompt('What was my previous profession?').toLowerCase();
if(devJobGuess === 'security' || devJobGuess === 'security guard' || devJobGuess === 'guard'){
  //CORRECT!
  alert('Yes, I was a security guard before I moved here for about a year and a half.');

}else{
  //INCORRECT!
  strikes++
  alert('Nope. I used to be a security guard!');

  if(strikes >= 4){

    alert('You must start again if you wish to access this page further!');
    location.href = 'https://omfgdogs.com/';
    throw new Error(str || "Script ended by death");

  }
}

//----QUESTION 3
var devGameGuess = prompt('What videogame am I most commonly associated with?').toLowerCase();
if(devGameGuess === 'minecraft'){
//----CORRECT!
  alert('Yes! I ran a Minecraft server for several years.');

}else{
  //----INCORRECT!
  strikes++
  alert('Brrrrt! I ran a public Minecraft server for several years.');

  if(strikes >= 4){

    alert('You must start again if you wish to access this page further!');
    location.href = 'https://omfgdogs.com/';
    throw new Error(str || "Script ended by death");

  }
}


//----QUESTION 4
//---- I used == instead of === cause I don't know what the user input will turn into.
var devMathGuess = prompt('What is the 52nd prime number?');
if(devMathGuess == 233){
//----CORRECT!
  alert('Correct! You googled that!');

}else{
  //----INCORRECT!
  strikes++
  alert('Nope! You can google it though.');

  if(strikes >= 4){

    alert('You must start again if you wish to access this page further!');
    location.href = 'https://omfgdogs.com/';
    throw new Error(str || "Script ended by death");

  }
}
