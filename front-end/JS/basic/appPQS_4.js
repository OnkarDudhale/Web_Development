// delete
let num=2;
let arr=[1,2,3,4,5,6,2,3];

for(let i=0;i<arr.length;i++){
    if(num==arr[i]){
        arr.splice(i,1); 
        console.log("value Deleted..");
    }
}
console.log(arr);

// count 
num=287152;
let count=0;
let copy=num;

while(copy>0){
    count++;
    copy=Math.floor(copy/10);
}

console.log(count);

//sum
num=287152;
let sum=0;
copy=num;
while(copy>0){
    let last=copy%10;
    sum+=last;
    copy=Math.floor(copy/10);
}
console.log(sum);


//factorial
num=5;
let i=1;
let fact=1;
while(i<=num){
    fact*=i;
    i++;
}
console.log(fact);

//largest number in array with positive value
arr=[10,30,20,50,40,25];
let max=arr[0];
for(let i=0;i<arr.length;i++){
    if(max<arr[i]){
        max=arr[i];
    }
}
console.log(`Max Value is:${max}`);
