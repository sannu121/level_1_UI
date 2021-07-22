
// value n variable_______________________________________________________________________________
// let country = "india";
// let continent ="asia";
// let population =5000;
// console.log(country);
// console.log(continent);
// console.log(population);


// data type____________________________________________________________________________________
// let isisland = false;
// let language
// console.log(typeof isisland) 
// console.log(typeof country) 
// console.log(typeof population) 
// console.log(typeof language) 
 

// type of oprater_________________________________________________________________________________
//  const now =2021; // if no.is same then we use now
//  const agesannu =now-1996;
//  const agenishu =now-1998;
// console.log(agesannu,agenishu)
// console.log(agesannu *2, agesannu/10,2**3);
// console.log(agesannu > agenishu);
// console.log(agenishu >=23);


// type of oprater (mathematical use)____________________________________________________________
// const average = (agesannu + agenishu)/2;
// console.log(agesannu,agenishu,average);

// let x,y;
// x=y=25-10-5;
// console.log(x,y);

// EX -01
// const massmark = 78;  
// const heightmark =1.69;
// const massjohn = 92;
// const heightjohn =1.95;
// USE FOR BULIAN TEST
// const massmark = 95;
// const heightmark =1.88;
// const massjohn = 85;
// const heightjohn =1.76;
 
// const BMImark = massmark / heightmark ** 2;
// const BMIjohn = massjohn / (heightjohn * heightjohn);
// const markhigherBMI =BMImark > BMIjohn;
// // USE FOR BOOLINA TRUE FULSE
// console.log(BMImark,BMIjohn,markhigherBMI);

// string and templet_________________________________________________________________
// const firstname ='john';
// const job ='teacher';
// const birthyear ='1991';
// const year = '2037'

// const john ="i'm " + firstname +', a '+ [year-birthyear] + 'year old' + job +'!';
// console.log(john)
// const johnnew =`i'm ${firstname}, a ${year-birthyear}year old${job}!`;
// console.log(johnnew)
// console.log(`this is sannu \n\yo boy\n\
// tera bug`)
// console.log(`tera
// buzz
// mujhe
// jine na de`)

// if(boolian)________________________________________________________________________________
// const age = 19;
// if(age>= 18){
//     console.log('sannu is driving')
// }
// (ye to hua only if true or false) (else shouid be for how many day left to turn 18)
// const age = 15;
// if(age>= 18){
//     console.log('sannu is driving')}
// else{
//      const yearleft = 18-age;
//     console.log(`sannu is too young to drive wait another. ${yearleft} years :`)
// }

// type of conversation numbers _______________________________________________________________

// const inputyear ='1991';
// console.log(Number(inputyear),inputyear)
// console.log(Number(inputyear) +18)

// console.log(Number('johnas'));
// console.log(typeof NaN)

// // type of corecion 
// console.log('i am ' + 23 + ' year old')
// //  console.log('23' - '10' - 3 ) ('26' * '23') ('23' / '2) (23 > 18)its string work oops

// true false_____________________________________________________________________________________
// 5 false value  ( 0 '' undifine null nan)
// const money = 100
// if (money){
//     console.log("don't spend all");
// }
// else {console.log('first get a job')
// }
// *importent logical if we put 100 booien true but if we put 0 boolien false 
// let height =123
// if (height){
// console.log('YAY hight is defined');
// }
// else{
//     console.log('height is undifine');
// }
// // *impo hight is null so it undifine if we put 0 it also undifine or false but we put 124 or etc it true

// edulity oprater__________________________________________________________________________________
// const age = 18
// if(age===18) console.log('you are just adult(strict)');
// if(age==18) console.log('you are just adult(loose)');
// // if u put string in number then loose wil pick up

// // ex-1
// const favourite =Number( prompt('what is your favourite number'));//number add for strict opctional
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite ===  23) { //if we use (=== strict then we use number) (==is a string)//(22===23 =>false)
//     console.log('gret 23 is cool number');
// }else if(favourite === 7){
//     console.log('7 is also a cool number');
// }
// else if(favourite === 9){
//     console.log('9 is also a cool number');
// }
// else {
//     console.log('both 7 or 23 or 9 not a number');
// }
// // extra
// if (favourite !==23){
//     console.log('why not 23');
// }

// boolian logic oprater____________________________________________________________________________
// const hasgooddrivringliecance = true;//A
// const hasgoodskill = true;//B change it to true to see result

// console.log(hasgooddrivringliecance&&hasgoodskill);
// console.log(hasgooddrivringliecance||hasgoodskill);
// console.log(!hasgooddrivringliecance);

// // const shoulddrive = hasgooddrivringliecance&&hasgoodskill;
// // if (hasgooddrivringliecance&&hasgoodskill){console.log('sarah should drive');
// // }else{console.log('someone should drive')}

// const istired = true//cchange it to true to see result
// console.log(hasgooddrivringliecance&&hasgoodskill&&istired);

// if (hasgooddrivringliecance&&hasgoodskill&&!istired)
// {console.log('sarah should drive');
// }else
// {console.log('someone should drive')}

// the switch statement_______________________________________________________________________________
// ex-1
//  const day = 'monday';
//  switch (day){
//      case 'monday'://day===monday
//      console.log('plan to go work');
//      console.log('go for coding');
//       break;
//      case 'tuesday':
//      console.log('preparing to theory');
//      break;
//      case 'wednesday':
//      case 'thursday':
//      console.log('writing code example');
//      break;
//      case 'friday':
//      console.log('record code videos');  
//      break;
//      case 'saturday':
//      case 'sunday':
//      console.log('netflix and chill'); 
//      break;
//      default:
//      console.log('not a valid day')
//     }

// ex-2
//     if(day==='monday'){
//         console.log('plan to go work');
//         console.log('go for coding');
//     }

//     else if(day ==='tuesday'){
//         console.log('preparing to theory');

//     }else if(day ==='wednesday'|| day==='thursday'){
//         console.log('writing code example');

//     }else if(day ==='friday'){
//         console.log('record code videos'); 

//     }else if(day ==='saturday'|| day==='sunday'){
//         console.log('netflix and chill'); 

//     }else{
//         console.log('not a valid day')  
//     }

// conditinal (turnary) oprater__________________________________________________________________________

// const age = 19;//play with number
// //ex-1
// // age >= 18 ? console.log('i like to drink wine'):
// // console.log('i like to drink water')
// //ex-2
// //  const drink = age>=18 ? 'wine': 'water';
// //  console.log(drink)
//  //ex-3
// let drink;
// if (age >=18){
//     drink = 'wine';
// }
// else{
//     drink = 'water';
// }
// console.log(drink);

// //ex-4
// console.log(
//     `i like to drink ${age>=18 ? 'wine': 'water'}`
// );








