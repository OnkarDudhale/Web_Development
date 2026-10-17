//arrow function that return a square of number
let func = (num) => {
    return num ** 2;
};
console.log(func(3));


// let funcInterval = (n) => {
//     let count = 0;
//     let id = setInterval(() => {
//         console.log("Hello world!");
//         count++;
//         if (count == n) {
//             clearInterval(id);
//         }
//     }, 2000);

// }
// funcInterval(5);

let id=setInterval(()=>{
    console.log("Hello world!");
},2000);

setTimeout(()=>{
    clearInterval(id);
    console.log("Clear interval / Interval Stopped.");
},10000);

