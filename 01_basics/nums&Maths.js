
//to.String() - convert your number into string datatype

let score = Number(40)
let scoreintostring = score.toString()
console.log(scoreintostring)
console.log(typeof scoreintostring)


//to.Fixed(): - it will give that much number after decimal which u have input in it.
console.log(score.toFixed(3))

//toPrecision():-  it will give you the precise value till the number you had mentioned and remove the decimal or round of the figure
let value = 457.7000
console.log(value.toPrecision(3))


//toLocaleString() - It will make your number to a readable format by putting commas in between them
// like 1000000 -----> 10,00,000

let me = 10000000000
console.log(me.toLocaleString()) //o/p = 10,000,000,000 it is coming in US digits format so let we convert it into IND format
console.log(me.toLocaleString('en-IN')) //o/p = 10,00,00,00,000


//-----------------------------------------------MATHS-------------------------------------------------------------//

//Math.abs():-   It will change your value to positive for example if you have given a value -4 then it will change into 4 and remove negative
console.log(Math.abs(-9)) //o/p - 9


//Math.round():- In this it will round of the value which you have given
console.log(Math.round(6.78)) // o/p - 7
console.log(Math.ceil(6.23)) // o/p - 7  IN this it will round of and give you the only TOP value
console.log(Math.floor(6.23)) // o/p - 6 IN this it will round of and give you the only Low value
 
//Math.min():- It will find out the minimum value
console.log(Math.min(5, 9, 8, 10, 3))  //o/p - 3

//Math.max():- It will find out the maximum value
console.log(Math.max(5, 9, 8, 10, 3))  //o/p - 10


//Math.random(): - It will give you the random value and value will always comes between 0 and 1 only.
console.log(Math.random())

console.log((Math.random()*10)  + 1) // we will get random value between 0 and 1 and it is always in a decimal so to avoid the decimal we
                                     // multiplied it by 10 and now to not get the value zero we add 1 to it.

console.log(Math.floor(Math.random()*10)  + 1) // Now to make it in the round off value we wrapped it in Floor 


//formula : - Now in this we want the value between 10 and 20 
let min = 10
let max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) 






