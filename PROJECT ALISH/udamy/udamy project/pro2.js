'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnclosemodal = document.querySelector('.close-modal');
const btnopenmodal = document.querySelectorAll('.show-modal');
console.log(btnopenmodal);

for (let i = 0; i < btnopenmodal.length; i++)
  document
    .querySelectorAll('.show-modal')
    [i].addEventListener('click', function () {
      console.log('button clicked'); //this is only for show in cansol
      document.querySelector('.modal').classList.remove('hidden'); //dont use .
      document.querySelector('.overlay').classList.remove('hidden');
    });
document.querySelector('.close-modal').addEventListener('click', function () {
  document.querySelector('.modal').classList.add('hidden');
  document.querySelector('.overlay').classList.add('hidden');
});
document.querySelector('.overlay').addEventListener('click', function () {
  document.querySelector('.modal').classList.add('hidden');
  document.querySelector('.overlay').classList.add('hidden');
});
