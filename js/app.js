'use strict';

let userName = prompt('What is your name');
alert(`Hello ${userName} Welcome to my Website! Let's Play a Game`);

let qOne = prompt('HTML stands for HyperText Markup Language (type yes/no)').toLowerCase();
if (qOne === 'yes' || qOne === 'y'){
  // console.log('Correct');
  alert('Correct');
} else if (qOne === 'no' || qOne === 'n'){
  // console.log('That is Incorrect');
  alert('That is Incorrect');
}

let qTwo = prompt('CSS stands for Cascading Style Script').toLowerCase();
if (qTwo === 'no' || qTwo === 'n'){
  // console.log('Correct');
  alert('Correct');
} else {
  // console.log('That is Incorrect');
  alert('That is Incorrect');
}

let qThree = prompt('Are Java and JavaScript are the same?').toLowerCase();
if (qThree === 'no' || qThree === 'n'){
  // console.log('Correct');
  alert('Correct');
} else {
  // console.log('That is Incorrect');
  alert('That is Incorrect');
}

let qFour = prompt('My last name is Gonzales').toLowerCase();
if (qFour === 'yes' || qFour === 'y'){
  // console.log('Correct');
  alert('Correct');
} else {
  // console.log('That is Incorrect');
  alert('That is Incorrect');
}

let qFive = prompt('At this moment, I am currently taking a Code-201 class').toLowerCase();
if (qFive === 'yes' || qFive === 'y'){
  console.log('Correct');
  alert('Correct');
} else {
  // console.log('That is Incorrect');
  alert('That is Incorrect');
}

alert(`Thank You ${userName} For Paying, I Hope You Had Fun!`);
