//Querying the DOM
    // - getElementById
    // - getElementsByTagName
    // - getElementsByClass
    // - querySelector
    // - querySelectorAll


//getElementById:
//document.getElementById('[type here]');
//document.querySelectorAll('type here[]');
//let header = document.getElementById('about me');
//similar to fishing, baiting the hook:
//hooking the element

// const header = document.getElementById('header');
// console.log(header);
// header.style.color = 'purple';
// header.innerText = 'Hello World!';

// //getElementByClassName:
// const errorList = document.getElementsByClassName('error-list');
// console.log(errorList);
// errorList[0].innerText = "I changed error 1!"

// //Example 1 Looping
// for (let i = 0; i < errorList.length; i++){
//     errorList[i].style.color = "red";
// };

// //Example 2 Looping
// for(error of errorList){
//     error.style.color = "green";
// };

// //Example 3 Looping forEach // CON NOT DO
// //errorList.forEach(error => error.style.color = "purple");

// //getElementByTagName: // <p>, <div>, <td>, <li>, etc
// const tags = document.getElementsByTagName('p');
// console.log(tags);
// tags[0].innerText = "This is gonna be a happy little seascape. This is probably the greatest thing to happen in my life - to be able to share this with you. Decide where your cloud lives. Maybe he lives right in here. Let your heart take you to wherever you want to be. Let's make some happy little clouds in our world."
// const lists = document.getElementsByTagName('li');
// console.log(lists);
// lists[1].innerText = "This is the second error line.";
// // lists[0].style.fontStyle = "italic";

// for (let i = 0; i < lists.length; i++) {
//     lists[i].style.fontStyle = "italic";
// }

//querySelector(); H1, #header, .error-list, ul > li, body > div > ul > li:nth-child(2)
// const header = document.querySelector('h1');
const header = document.querySelector('#header');
console.log(header);

const errorList = document.querySelector('.error-list');
console.log(errorList);
const errorList2 = document.querySelector('body > div > ul > li:nth-child(2)')
console.log(errorList2);

//querySelectorAll(): H1, #header, .error-list, ul > li, body > div > ul > li:nth-child(2)

const listItems = document.querySelectorAll('.error-list');
const headerTags = document.querySelectorAll('h1');
console.log(headerTags);

console.log(headerTags[1]);

headerTags.forEach(h =>{
    h.style.color = "blue";
})

listItems.forEach(li =>{
    li.style.fontStyle = "italic";
})


/*
Method                  Node-List Html or Element          Single/Multiple         Loop Through

querySelector                    Element                       Single                  N/A


querySelectorAll                Node-List                     Multiple           Yes, even using forEach



Method                  Node-List Html or Element           Single/Multiple         Loop Through

getElementById                  Element                         Single                  N/A

getElementsByClass           Html Collection                    Multiple          Yes, but not forEach

getElementsByTagName         HTML Collection                    Multiple          Yes, but not forEach
*/