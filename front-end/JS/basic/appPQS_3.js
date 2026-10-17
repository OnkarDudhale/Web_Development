let arr=[7,9,0,-2];
// let arrNew=arr.splice(0,3);
console.log(arr.slice(0,3));
console.log(arr.slice(-3));


let str="";
if(str.length==0){
    console.log(`String is blank`);
}else{
    console.log(`String is not a blank`);
}


let strArray=['a','B','C','d'];
let character=strArray[0];
if(character===strArray[0].toLowerCase()){
    console.log("character is lowercase");
}
else{
    console.log("character is uppercase");
}


let string=" help! ";
console.log(`stripe leading and trailing spaces:${string.trim()}`);

let findArr=[1,2,4,3];
let num=5;
console.log(findArr.includes(num));
