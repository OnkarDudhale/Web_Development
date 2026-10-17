let num = 20;
if (num % 10 == 0) {
    console.log("good");
} else {
    console.log("bad");
}

let uName = prompt("Enter User name:");
age = prompt("Enter age:");
alert(`${uName} is ${age} years old.`);
console.log(`${uName} is ${age} years old.`);

// let quarter = 6;
let quarter=prompt("Enter Quarter:");
switch (quarter) {
    case 1:
        console.log(`Jan,Feb,Mar`);
        break;
    case 2:
        console.log(`Apr,May,June`);
        break;
    case 3:
        console.log(`July,Aug,Sep`);
        break;
    case 4:
        console.log(`Oct,Nov,Dec`);
        break;
    default:
        console.error(`wrong quarter number....`);    
}


let str="Apples";
if((str[0]==="A" || str[0]==="a") && str.length>5){
    console.log("golden string");
}
else{
    console.log("not a golden string...");
}

let num_1=14;
let num_2=15;
let num_3=16;

if(num_1>num_2 && num_1>num_3){
    console.log(`${num_1} is greater than other two numbers`);
}
else if(num_2>num_1 && num_2>num_3){
    console.log(`${num_2} is greater than other two numbers`);
}
else{
    console.log(`${num_3} is greater than other two numbers`);
}