'use strict';
/*
//method ____________1
//
//
let para = document.getElementById('para'); //this is entry in html para
// console.log(para);
para.innerHTML = 'this is kumar sannu';
//
//
// method_____________2
document.getElementById('para').innerHTML = 'this is dom titurial';
//
//
// method_______________3
let para = document.querySelectorAll('.para'); //USe as a node no in cons.
console.log(para); //use as index no.
para[0].innerHTML = 'para1 ';
*/
//______________________________________________________________________________________________________
//
//
/*
// let sub = document.querySelector('input(type=submit)');
// sub.classList.add('submit');

//
//creat para

let p1 = document.createElement('p');
let p2 = document.createElement('p');
//
// specify to textcontant proparty (demo)
p1.textContent = 'first paragaraph';
p2.textContent = 'second paragaraph';
//
//add to dom
const content = document.querySelector('.content');
content.appendChild(p1);
// content.appendChild(p2);
document.body.appendChild(p2); //we use in body if we want
//
// set tribute like class id etc
p1.setAttribute('class', 'para1');
p1.setAttribute('class', 'para'); //update
//remove attribute
p1.removeAttribute('class');
*/
//__________________________________________________________________________________________________
//
/*
let toggle = document.querySelector('.toggle');
// creating a fungsation
let color = function (flag) {
  // bolien
  if (flag) {
    toggle.className = 'toggle_in';
  } else {
    toggle.className = 'toggle_out';
  }
};
color(false); //call funsatiom
*/
//________________________________________________________________for click event_____________________
/*
//using add event lisner
document.querySelector('.btn').addEventListener('click', function () {
  //   document.querySelector('.para').innerHTML = 'this is click funcation';example..1
  document.querySelector('.para').style.fontSize = '3em';
  document.querySelector('.para').style.color = 'tomato'; //example..2
});
*/
// ______________________________________________________________________________

// creat focus event
let form = document.getElementById('form');
form.addEventListener(
  'focus',
  function (event) {
    //event.target
    // console.log(event.target); //for using console click
    event.target.style.background = 'lightblue';
  },
  true
);
// creat blur event

form.addEventListener(
  'blur',
  function (event) {
    event.target.style.background = '';
  },
  true
);
