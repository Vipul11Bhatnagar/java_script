let score = 33
let convertScore = String(score)
console.log(typeof convertScore)

let age = "33abc"
let convertage = Number(age)
console.log(typeof convertage)

let number = null
//let convertage = Number(age)
let convertnumber = Number(number)
console.log(typeof convertnumber)


let variable = undefined
let convertvariable = Boolean(variable)
console.log(typeof convertvariable)
console.log(convertvariable)



let newvariable = "hitesh"
let convertnewvariable = Boolean(newvariable)
console.log(typeof convertnewvariable)
console.log(convertnewvariable)

let newnumber = null
//let convertage = Number(age)
let convertagainnumber = Boolean(newnumber)
console.log(typeof convertagainnumber)





// ---------------------0perations-----------------------------------------------//


console.log ("1" + 2)
console.log (1 + "2")
console.log ("1" + 2 + 2)
console.log (1 + 2 + "2")
console.log(( (3 + 4) *5) /3)

// precedence operator 
//prefix and postfix

let gamecounter = 1100
//++gamecounter;
//let newgamecounter = ((++gamecounter) + (++gamecounter))
//let new1gamecounter = ((gamecounter++) + (gamecounter++))
let new2gamecounter = ((++gamecounter) + (gamecounter++))


//console.log(newgamecounter)
//console.log(new1gamecounter)
console.log(new2gamecounter)