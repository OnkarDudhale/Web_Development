// Square and sum the array elements using the arrow function and then find the average of the array.
let arr=[1,2,3,4,5,6,7,8,9,10];

let perform=(()=>{
   let square=arr.map((el)=>{
    return el**2;
   }) 
   let sum=arr.reduce((sum,el)=>{
    return sum+el;  
   })
   console.log(square);
   console.log(sum);
   console.log(sum/arr.length);
});
perform();  

// Create a new array using the map function whose each element is equal to the original element plus 5
let func=(()=>{
   let arr=[1,2,3,4,5];
   let plus_5=arr.map((el)=>{
      return el+5;
   })
   console.log(plus_5);
});
func();

//Create a new array whose elements are in uppercase of words present in the original array.
let words=["beauty","tree","sand","soil","plant"];
let upperC=((words)=>{
   let uppercase=words.map((w)=>{
      return w.toUpperCase();
   })
   console.log(uppercase);
});
upperC(words);

//Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments.The function should return a new array with the original array values and all of the additional arguments doubled
let doubleAndReturnArgs=(arr,...args)=>[
   ...arr,
   ...args.map(arg=>arg*2)
]
console.log(doubleAndReturnArgs([1,2,3],4,4));

//Write a function called merge Objects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object

let mergeObjs=(obj1,obj2)=>({
   ...obj1,
   ...obj2
});
console.log(mergeObjs({name:"onkar",age:21},{marks:89,class:"Msc(comp.sci.)"}));