'use strict';
let tScore = 7;
let score = 0;
let userName = prompt('What is your name');
alert(`Hello ${userName} Welcome to my Website! Let's Play a Game`);

function question1(){
  let qOne = prompt('HTML stands for HyperText Markup Language (type yes/no)').toLowerCase();
  if (qOne === 'yes' || qOne === 'y'){
    alert('Correct');
    score ++;
  } else if (qOne === 'no' || qOne === 'n'){
    alert('That is Incorrect');
  }
}
question1();

function question2(){

  let qTwo = prompt('CSS stands for Cascading Style Script').toLowerCase();
  if (qTwo === 'no' || qTwo === 'n'){
    alert('Correct');
    score ++;
  } else {
    alert('That is Incorrect');
  }
}
question2();

function question3(){
  let qThree = prompt('Are Java and JavaScript are the same?').toLowerCase();
  if (qThree === 'no' || qThree === 'n'){
    alert('Correct');
    score ++;
  } else {
    alert('That is Incorrect');
  }
}
question3();

function question4(){
  let qFour = prompt('My last name is Gonzales').toLowerCase();
  if (qFour === 'yes' || qFour === 'y'){
    alert('Correct');
    score ++;
  } else {
    alert('That is Incorrect');
  }
}
question4();

function question5(){
  let qFive = prompt('At this moment, I am currently taking a Code-201 class').toLowerCase();
  if (qFive === 'yes' || qFive === 'y'){
    console.log('Correct');
    alert('Correct');
    score ++;
  } else {
    alert('That is Incorrect');
  }
}
question5();

function age(){
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
}
age();

function myHeros(){
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
}
myHeros();


alert(`Thank You ${userName} For Playing, Your score was ${score} out of ${tScore}. I Hope You Had Fun!`);
