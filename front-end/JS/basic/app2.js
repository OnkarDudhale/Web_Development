// Strings
let msg=" help me! ";
console.log(`msg ${msg} => ${msg.trim().toUpperCase()}`); 
let mg=msg.trim();

console.log(mg.indexOf("l"));
console.log(mg.replace("we","me"));
console.log(mg.slice(1,5)); 

//Arrays
let months=["jan","july","march","aug"];
console.log(months);
months.shift();
months.shift();
console.log(months);

months.unshift("june");
months.unshift("july");
console.log(months);


//Arrays operations
let cars=["mercedez","maruti","lamborgini","g-wagon","bently"];
let numberPlate=[102,104,101,105,103];
console.log(cars.indexOf("lamborgini"));
console.log(cars.includes("maruti"));
console.log(cars.concat(numberPlate));
// console.log(cars.reverse());
console.log(cars.slice(3)); 
console.log(cars); 
console.log(cars.splice(1,1,"tata")); //update
console.log(cars); //change in real array

console.log(cars.sort());
console.log(numberPlate.sort());


