//check every array numbers is multiples of 10
let arr = [10, 100, 50, 55, 5, 300];
let multiple_10 = arr.every((nums) => {
    return nums % 10 == 0;
});
console.log(multiple_10);


//find the min array number
let minimum = (arr) => {
    let minVal=arr.reduce((min, val) => {
        if (min > val) {
            return val;
        } else {
            return min;
        }
    });
    console.log(minVal);
}
minimum(arr);