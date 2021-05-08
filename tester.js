let attempts = 0;
const maxAttempts = 3;

let guess = document.getElementById("guessingBox").value;
const button = document.querySelector("#guessingButton");

var computerNum = Math.floor(Math.random() * 10 + 1);

console.log(computerNum)


button.addEventListener("click", e => {
    e.preventDefault();

    if (guess === computerNum) {
        prompt("Congrats! You got it correct!");}
    // } else if (guess <= computerNum){
    //     alert(`You too high...`);
    // } else if (guess >= computerNum){
    //     alert(`You too low...`);
    // }

    // for (attempts = 0, attempts < 3, attempts++){
    //     if (attempts < 3) {
            
    //     }
    // }
})
