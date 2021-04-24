for (i=0;i<=69;i+=3){
    console.log(i); 
 };

let chittyChittyBangBang = {
    genre:'Fantasy/Musical',
    year        :   1968,
    director    :   "Ken Hughes",
};

console.log("Who directed the movie?" + chittyChittyBangBang.director);

function fullName(first, middle, last){
    let wholeName = first + " " + middle + " " + last;
    return wholeName; // Or return first + " " + last;
}
console.log(fullName("Abel", "Lee", "Watson"));