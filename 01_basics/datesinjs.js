// Date is an object in javascript

let date = new Date() // in this date object things are already present as it is a default or prebuilt object in Javascript
console.log(date.toString())
console.log(date.toDateString())
console.log(date.toISOString())
console.log(date.toLocaleDateString())
console.log(date.toLocaleTimeString())
console.log(date.toTimeString())


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let mydate = firstdate = {
           year: 2024,
           month: "september",
           day: 22

}
console.log(mydate.month)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// To calclate the milliseconds 
let myTimeStamp = Date.now()
console.log(myTimeStamp)

console.log(date.getTime())


console.log(Math.floor(Date.now()/1000))


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let newDate = new Date()
console.log(newDate.getDay())
console.log(newDate.getMonth())
