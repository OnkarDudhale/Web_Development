//forEach

//simple array
let arr = [10, 20, 30, 40, 50];
function printArr(el) {
    console.log(el);
}
arr.forEach(printArr);

arr.forEach(function (el) {
    console.log(el);
})

arr.forEach((el) => {
    console.log(el);
});


//array of objects
let arrOfObj = [{
    name: "onkar",
    age: 21
}, {
    name: "vishal",
    age: 22
}, {
    name: "abhi",
    age: 21
}];

//forEach
arrOfObj.forEach((student) => {
    console.log(student);
    console.log("Student name:" + student.name);
});

//map
//return values place in new array 
let students = arrOfObj.map((student) => {
    return student.age;
});
console.log("Students age:" + students);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sqNum = numbers.map((num) => {
    return num ** 2;
});
console.log("Square of numbers from an array:" + sqNum);

//fliter
let evenNum = numbers.filter((n) => {
    return n % 2 == 0;
})
console.log("Even Numbers from an array:" + evenNum);

//every and some
//if every element true return true, else return false
let ans = numbers.every((num) => {
    return num % 2 == 0;
})
console.log("Every :" + ans);

//if some element true=true 
ans = numbers.some((num) => {
    return num % 2 == 0;
})
console.log("Some :" + ans);

//reduce
//return single value
//two parameters accumulator & element
let nums = [10, 50, 40, 30, 20];
let sum = nums.reduce((acc, el) => {
    return acc + el;
})
console.log(sum);

//find the max number using reduce method
let func = (nums) => {
    let max = nums.reduce((res, val) => {
        if (res < val) {
            return val;
        }else{
            return res;
        }
    });
    console.log("Maximum Number from array :" + max);
}
func(nums);