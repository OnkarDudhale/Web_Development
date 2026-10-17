console.warn("Spread");
let arr = [10, 20, 30, 40, 5];

//spread
console.log(...arr);
console.log(Math.min(...arr));

let newArr = [...arr];//copy 
newArr.push(60);
console.log(newArr);
console.log(arr);

let obj = {
    stud1: {
        name: "onkar",
        age: 21
    },
    stud2: {
        name: "vishal",
        age: 22
    }
};

obj.stud1.id = 123;
console.log(obj);
let newObj = {
    ...obj, stud3: {
        name: "anu",
        age: 21
    }, id: "stud_123"
}
console.log(newObj);

let nums = [1, 2, 3, 4, 5];
// let objs={...nums};
// console.log(objs);
console.log({ ...nums });

//String 
let str = "Hello!";
console.log(...str);
console.log([...str]);
console.log({ ...str });

//Rest
console.warn("ResT");
function arg(...args) {
    console.log(args);
}
arg(1, 2, 3, 4);

//max value
function max(...args) {
    let maximum = args.reduce((acc, el) => {
        if (acc < el) {
            return el;
        }
        else {
            return acc;
        }
    })
    console.log("Max element :" + maximum);
}
max(10, 209, 300, 12, 500, 1);

//argument collection
function args() {
    console.log(arguments);
    console.log("arguments length :" + arguments.length);
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
    // console.log(arguments.reduce((acc,el)=>{acc+el})) arguments is not an array is a collection
}
args(1, 2, 3, 4, "hello");

function array(...args) {
    console.log(args);
}
array({ id: 123, name: "onkar" }, { id: 121, name: "vishal" }, "hello", 15);


//Destructuring 
let teams = ["CSK", "MI", "RCB", "SRH"];
let [winner, runner_up, ...others] = teams;

console.log("WINner :" + winner);
console.log("RUNNERup :" + runner_up);
console.log("Other teams :" + others);

//Destructuring objects
let trophis = {
    csk: {
        title: 5,
        playoffs: 12
    },
    mi: {
        title: 5,
        playoffs: 6
    }
}
let { csk: chennai, mi: mumbai } = trophis;

try {
    console.log(csk);  //csk data in chennai
} catch (e) {
    console.log(e);
}
console.log(chennai);
console.log(mumbai);

let user={
    name:"onkar dudhale",
    email:"dudhaleonkar@gmail.com",
    mobile:9322382829,
    login_by:["mobile-no","email-id"],
    username:"onkar",
    password:"Onkar@2004",
    place:"mumbai"
}
let {username,password,place="pune"}=user;
console.log(username);
console.log(password);
console.log(place);