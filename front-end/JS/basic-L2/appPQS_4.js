//Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers
let arrayAverage=(arr)=>{
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    let avg=sum/arr.length;
    return avg;
};
let arr=[10,20,30];
console.log(arrayAverage(arr));

//Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not
let isEven=(num)=>{
    if(num%2==0){
        return true;
    }else{
        return false;
    }
};
let num=8;
console.log(isEven(num));

//global scope
const object={
    meassage:'Hello, World!',
    logMessage(){
        console.log(this.meassage);
    }
};
setTimeout(object.logMessage(),1000);//global scope


let length=4;
function callback(){
    console.log(this.length);
}
const obj={
    length:5,
    method(callback){
        console.log(this.length)
        callback();
    }
};
obj.method(callback);