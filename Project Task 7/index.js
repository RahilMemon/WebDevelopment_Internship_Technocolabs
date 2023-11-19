let myAge = 20;
/* Setting a variable with my age. I've changed that to "let" instead of "const", so i can work with my "if/else" fix */

let earlyYears = 2;
/* Early years of a dog */

earlyYears *= 10.5;

let laterYears = myAge - 2;
/* Since we already accounted for the first two years, take the myAge variable, and subtract 2 from it.*/

laterYears *= 4;
/* Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years. */

myAgeInDogYears = laterYears + earlyYears;

const myName = "Rahul".toLowerCase();


console.log(`My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years.`);
