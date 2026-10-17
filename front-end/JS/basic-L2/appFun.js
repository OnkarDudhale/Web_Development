// Roll Dice
function rollDice(){
    for(let i=1;i<=6;i++){
        let dice=Math.floor(Math.random()*6)+1;
        console.log(dice);
    }
}
rollDice();

// Average of three numbers
function average(a,b,c){
    let avg=(a+b+c)/3;
    console.log(`average : ${avg}`);
}
average(10,20,30);

//multiplication - table
function table(num){
    for(let i=num;i<=num*10;i+=num){
        console.log(num+"="+i);
    }
}
table(4);

//function that returns sum of 1 to n
let sum=0;
function sumOf(num){
    for(i=1;i<=num;i++){
        sum+=i;
    }
    return sum;
}
console.log(`Total sum : ${sumOf(6)}`);

//function that concat all strings of array
let str=["hi","hello","bye","welcome"];
function concat(){
    let cStr="";
    for(let i=0;i<str.length;i++){
        cStr+=str[i];
    }
    return cStr;
}
console.log(concat())