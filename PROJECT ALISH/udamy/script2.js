"use strict";
//************************************************************importents fundamental****************************************** */
// function___________________________________________
// function logger(){
//     console.log('my name is sannu');
// }
// // calling /running /invoking
// logger();
// logger();
// logger();
// // ex-1
// function fruitprocesser(apple,orange){
//     // console.log(apple,orange); 5,0 dekha rha tha
//     const juice =`juice with ${apple} apple and ${orange} orange.`;
//     return juice;

// }
// // calling /running /invoking
// // fruitprocesser(5,0);
// // calling /running /invoking lv-2
// const applejuice =fruitprocesser(5,0);
// console.log(applejuice)
// console.log(fruitprocesser(5,0));//here we use applejuice as well up repeat twice

// const appleorangejuice =fruitprocesser(4,2);
// console.log(appleorangejuice)

// function declreation and expresation__________________________________

//(fungsatin declreation)

// function calage1(birthyear){
//     return 2037-birthyear;
// }
// const age1=calage1(1991);//if we use this in before decleration it work✔ //expresation❌
// // console.log(age1);

// //(fungsation expresatin)

// const calcage2 = function(birthyear){
//     return 2037-birthyear;
// }
// // call function
// const age2 =calcage2(1991);
// console.log(age1,age2);

// arrow function___________________________________________________________

// const calcage3 = birthyear=>2037-birthyear;
// const age3 = calcage3(1991);
// console.log(age3);
// //  ex-1
// // const yearuntillretirement= birthyear=>{
// //     const age =2037-birthyear;
// //     const retirement= 65-age;
// //     return retirement
// // }
// // console.log(yearuntillretirement(1991));//we use curlibrase and return fungsation for more then ne line of code
// // ex-2 lv-2
// const yearuntillretirement= (birthyear , firstname)=>{
//      const age =2037-birthyear;
//      const retirement= 65-age;
//     //  return retirement
//     return `${firstname} retires in ${retirement} years`
// }
//     //``call template string
//     console.log(yearuntillretirement(1991,'sannu'))
//     console.log(yearuntillretirement(1980,'nishu'))

//fungsation calling other fungation_________________________________________
// function cutfruitpieces(fruit){
//     return fruit * 4;//play change
// }

// function fruitprocesser(apple,orange){
//  const applepieces=cutfruitpieces(apple);
//  const orangepieces=cutfruitpieces(orange);
//   const juice =`juice with ${applepieces} pices of apple and ${orangepieces} pices of orange.`;//replays of {apple} {orange} to sintex
//    return juice;}
// console.log(fruitprocesser(2,3)) //lock in consol.log

// arrays____________________________________________________________________________
// const friend1 ='sannu'
// const friend2 ='nishu'
// const friend3 ='chotu'

// const friends =['sannu','nishu','chotu'];
// console.log(friends);

// // const year =new Array(1996,2000)
// // console.log(year); second method

// console.log(friends[0]);
// console.log(friends[2]);//for knowing name

// console.log(friends.length);//for knowing arrays
// console.log(friends[friends.length-1]);

// friends[2]= 'munku';
// console.log(friends);//data change

// // ex-1
// const jones =['jonathan','kumar', 2021-1996 ,'teacher', friends];
// console.log(jones);
// console.log(jones.length);
// // or we use jonathan as a ...
// // const firstname ='jonathan
// //const jones =[firstname,'kumar',202......] etc

// // ex-2
//     const calcage = function(birthyear){
//      return 2037-birthyear; }

//      const year=[1997 ,1998 ,1999, 2000]

//      const age1= calcage(year[0])
//      const age2= calcage(year[1])
//      const age3= calcage(year[year.length-1])

//      console.log(age1,age2,age3);

//     // also calculate like this
//     const ages=[calcage(year[0]),calcage(year[1]),calcage(year[year.length-1])]
//     console.log(ages);

//array opration______________________________________________________________
// const friend = ['rasiya','katrena','deepika'];
// //add eliment

// friend.push('malvika')
// console.log(friend);

// friend.unshift('pranitha')
// console.log(friend)

// //remove eliment
// friend.pop();//last
// console.log(friend)

// friend.shift()//first
// console.log(friend)

// // extra fungsation
// console.log(friend.indexOf('katrena'))

// console.log(friend.includes('rasiya'))

// //boolinan
// if (friend.includes('rasiya')){
//     console.log('youy have a friend called rasiya');
// }

// object dot etc____________________________________________________________________________

// const sannu = {
//     firstName: 'sannu',
//     lastName:'kumar',
//     age:2021-1996,
//     job :'berojgar',
//     friends:['nishu','minku','chotu']

// }
// console.log(sannu);
// // dot briket notation
// console.log(sannu['lastName']);
// console.log(sannu.lastName);

// const Namekey= 'Name';

// console.log(sannu['first'+ Namekey]);
// console.log(sannu['last'+ Namekey]);
// // console.log(sannu.'last'+ Namekey); not working

// //ex-1
//  const intro = prompt('what do you want to know about sannu? chose between firstname ,lastname, age, job, and friend')
// console.log(sannu[intro]);// if user click job then what hppn then we use befor (intro) name (sannu[intro])

// // boolien attribut
// if(sannu[intro]){
//  console.log(sannu[intro])
// }else{
//     console.log('worng request ! chose between firstName ,lastName, age, job, and friends');
// }
// // add
// sannu.location = 'india';
// console.log(sannu);

// //challange-1****************************************************************
// // wrote sannu has 3 friends  nishu is his best friend
// console.log(`${sannu.firstName} has ${sannu.friends.length} friends but ${sannu.friends[0]} his best friends`);

// OBJECT METHOD IMPORTENT ____________________________________________________

//  const sannu = {
//      firstName: 'sannu',
//      lastName:'kumar',
//      birthyear:1996,
//      job :'berojgar',//string
//      friends:['nishu','minku','chotu'],//arrey
//     hasdrivringliecance:true, //boolien

//     // calage :function(birthyear){
//     //     return 2021-birthyear;//functaion

//     // if i change my name not impact in my age
//     // calage :function(birthyear){
//     //     console.log(this)
//     //     return 2021-this.birthyear;//functaion

//     // for repeation age shortcut
//     calage :function () {
//        this.age= 2021-this.birthyear;
//         return this.age;//functaion
//     },

//     getsummary : function () {
//      return `${this.firstName} is a ${this.calage()} year old `
//     }
//  };
// // console.log(sannu.calage(1996));
// // console.log(sannu['calage'](1996));

// // repeatatin
// //  console.log(sannu.calage());

// //   console.log(sannu.age);
// //   console.log(sannu.age);
// //   console.log(sannu.age);
// //   console.log(sannu.age);
// //   console.log(sannu.age);

// //  challange-2*******************************************************************
// // sannu is a 25 year old teacher and he has a drivring liecance
// // weput getsummy below the return curleybreses
// console.log(sannu.getsummary());

// LOOOOOOOOOOOOP________________________________________________________________

// console.log('lifting weight repetation 1 ');
// console.log('lifting weight repetation 2 ');
// console.log('lifting weight repetation 3 ');
// console.log('lifting weight repetation 4 ');
// console.log('lifting weight repetation 5 ');
// console.log('lifting weight repetation 6 ');
// console.log('lifting weight repetation 7 ');
// console.log('lifting weight repetation 8 ');
// console.log('lifting weight repetation 9 ');
// console.log('lifting weight repetation 10 ');

// for(let rep =1; rep<=10; rep++){//let rep=1; means rep 1 se start hoga.//rep<=10 means arres ki lenth
//     console.log(`lifting weight repetation ${rep}`);
// }

// loop array_______________________________________________________________________
// const jonas = [
//     'sannu',
//     'kumar',
//      2021-1996,
//      'teacher',
//      ['nishu','chotu','minku'],
//      true
// ];

// for(let i =0; i<jonas.length; i++){//i=0 meaning starting 1 //1<5 means arrays ki sankhya 5 note [if should change to 6 then we use i<6 or i<jones.lenth]**

//     // if(typeof jonas[i]  !=='string')continue; //loop continues it show only we want to show
//     console.log(jonas[i] ,typeof jonas[i]);//[i] means we lock all class
// }
// // continue; //loop continues it show only we want to show
// console.log('__only string__')
// for(let i =0; i<jonas.length; i++){
//      if(typeof jonas[i]!=='string')continue;
//     console.log(jonas[i] ,typeof jonas[i]);
// }
// // beake; //loop break it show only we want to show
// console.log('__only break__')
// for(let i =0; i<jonas.length; i++){
//      if(typeof jonas[i] ==='number')break
//     console.log(jonas[i] ,typeof jonas[i]);
// }

// loop backword______________________________________________________________________

//  const jonas = [
//      'sannu',
//      'kumar',
//       2021-1996,
//       'teacher',
//       ['nishu','chotu','minku'],
//       true
// ];

// for(let i = jonas.length-1; i>=0; i--){
//     console.log(i,jonas[i]);//jonas[i] without series
// }

// // loop in loop_______________________________________________
// for(let excercise = 1; excercise <=3 ;excercise++){//this{}end in loop end
//     console.log(`___starting exercise____ ${excercise}`);
// // loop in loop in loop
// for(let rep =1; rep<= 5;rep++){
// console.log(`lifting box champ.. ${rep}`)}}

// while loop______________________________________________________________________

// for(let rep =1; rep<=10; rep++){
//     console.log(`lifting weight repetation ${rep}`); }

let rep = 1;
while (rep <= 10) {
  // console.log(`while: lifting weight repetation ${rep}`);
  rep++;
}

// ex-1
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`you roll ed a ${dice}`); //this is for stop loop if it get 6
  dice = Math.trunc(Math.random() * 6) + 1; //this in no need but whout this computer crash infan..loop

  if (dice === 6) console.log("loop is about to end");
}
