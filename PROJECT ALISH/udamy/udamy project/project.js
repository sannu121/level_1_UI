'use strict';

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "🎉 correct number!";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").Value = 23;
// console.log(document.querySelector(".guess").Value);
// const x = function () {
//   console.log(23);
// };
//_________________________________________________________yaha tak to clear hAai_________________________________________
/*
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // for boolian??

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ NO NUMBER';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 correct number!';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '📈 too high';
    score--; //for decreace score if we try
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '📉too low';
    score--; //for decreace score if we try
    document.querySelector('.score').textContent = score;
  }
});
*/
//_________________________________________________________________x____________________________________________
//_____________________________________________________________yaha tak clear h______________________________

/*

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let score = 20; //for score
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  
//when there are no input//
  if (!guess) {
    document.querySelector('.message').textContent =
     '⛔ NO NUMBER';
  } 
  //when player win//
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
     '🎉 correct number!';
  }
  // when guess is to high//
   else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
       '📈 too high';
      score--; //for decreace score if we try
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
       '😢 you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  // when is guess to low//
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
       '📈 too low';
      score--; //for decreace score if we try
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
       '😢 you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
*/
//__________________________________________________________________________x___________________________________

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let score = 20; //for adding scores
let highscore = 0; //for high score

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there are no input//
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ NO NUMBER';
  }
  //when player win//
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 correct number!';
    document.querySelector('body').style.backgroundColor = '#60b347'; //for css
    document.querySelector('.number').style.width = '30rem'; //for css
    //------for highscore-------//
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // when guess is to high//
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 too high';
      score--; //for decreace score if we try
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😢 you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  // when is guess to low//
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 too low';
      score--; //for decreace score if we try
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😢 you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
