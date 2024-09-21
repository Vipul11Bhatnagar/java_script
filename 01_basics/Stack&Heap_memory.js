//All primitive datatypes contains stack memory

let name1 = "vipul"
let name2 = name1
    name2 = "tushar"

    console.log(name1)
    console.log(name2)

    // In this only name2 value get change because it contains the copy of name1 variable value not the original value of name1//



//All non-primitive datatypes contain heap memory

let person = {
    name: "gogy",
    age: 34

}

let person1 = person
    person1.name = "titu"

    console.log(person.name)
    console.log(person1.name)

     // In this  both variables value get change because it is the reference of  variable //


