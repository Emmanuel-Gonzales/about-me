'use strict';
let tScore = 7;
let score = 0;
let userName = prompt('What is your name');
alert(`Hello ${userName} Welcome to my Website! Let's Play a Game`);


let qOne = prompt('HTML stands for HyperText Markup Language (type yes/no)').toLowerCase();
if (qOne === 'yes' || qOne === 'y'){
  // console.log('Correct');
  alert('Correct');
  score ++;
} else if (qOne === 'no' || qOne === 'n'){
  // console.log('That is Incorrect');
  alert('That is Incorrect');
}


let qTwo = prompt('CSS stands for Cascading Style Script').toLowerCase();
if (qTwo === 'no' || qTwo === 'n'){
  // console.log('Correct');
  alert('Correct');
  score ++;
} else {
  // console.log('That is Incorrect');
  alert('That is Incorrect');
}


let qThree = prompt('Are Java and JavaScript are the same?').toLowerCase();
if (qThree === 'no' || qThree === 'n'){
  // console.log('Correct');
  alert('Correct');
  score ++;
} else {
  // console.log('That is Incorrect');
  alert('That is Incorrect');
}


let qFour = prompt('My last name is Gonzales').toLowerCase();
if (qFour === 'yes' || qFour === 'y'){
  // console.log('Correct');
  alert('Correct');
  score ++;
} else {
  // console.log('That is Incorrect');
  alert('That is Incorrect');
}


let qFive = prompt('At this moment, I am currently taking a Code-201 class').toLowerCase();
if (qFive === 'yes' || qFive === 'y'){
  console.log('Correct');
  alert('Correct');
  score ++;
} else {
  // console.log('That is Incorrect');
  alert('That is Incorrect');
}


let num = 4;
while (num){
  let myAge = parseFloat(prompt('How old am I?'));
  if(myAge < 20){
    alert('Thats too low');
  } else if(myAge > 20){
    alert('Thats to high');
  } else if(myAge === 20){
    alert('That is the right answer!');
    score ++;
    break;
  }
  else {
    alert('Please enter a valid answer');
  }
  num --;
  if(num === 0){
    alert('Sorry Your out of Attempts. I am 20 Years old');
  }
}


let heroes = ['spider-man','batman','moon knight','dr.strange', 'green lantern','black panther'];
for(let i = 0; i < 6; i ++){
  let ans = prompt('What is my Favorite Superhero?').toLowerCase();
  for(let j = 0; j < heroes.length; j++){
    if(ans === heroes[j]){
      alert('You Got it Right, You know your Comics.');
      score ++;
      i = 5;
      break;
    }
  }
}
alert(`My Favorite Superheroes are ${heroes}. Try to See if You Can Guess Another One.`);


alert(`Thank You ${userName} For Playing, Your score was ${score} out of ${tScore}. I Hope You Had Fun!`);
