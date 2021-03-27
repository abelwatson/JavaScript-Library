//1                //2
let bobAlcorn = {
    //3                 //4
    name            : "Bob Alcorn",
    age             : 59,
    vocation        : "Chief Operating Officer",
    isRetired       : false
};

console.log(bobAlcorn); //1
console.log(bobAlcorn.name); //2
console.log(bobAlcorn.age); //3
console.log(bobAlcorn.middleName); //undefined: middleName does not exist

let chittyChittyBangBang = {
    genre:'Fantasy/Musical',
    year        :   1968,
    director    :   "Ken Hughes",
};

console.log("Who directed the movie?" + chittyChittyBangBang.director);