//this keyword used get access of object variables in method
let objThis = {
    sName: "onkar",
    marks: 89,
    age: 21,
    getDetail() {
        console.log(`${this.sName}=${this.marks}=${this.age}`);
    }
};

//try-catch block
let func = (b, c) => {
    console.log("value B:" + b);
    try {
        console.log(a);
    } catch (e) {
        console.log(e);
    }
    console.log("value B:" + b);
    console.log("value C:" + c);
};
func(5, 8);

//explicit return
//no need of return keyword , (terminate);
let sum = (a, b) => (a + b);
console.log("SUM :" + sum(6, 4));

//setTimeout function

console.log("Hi!");
setTimeout(() => {
    console.log("Good Morning.")
}, 2000);
console.log("Hey!.");

//setInterval function
/*let id1=setInterval(()=>{
    console.log("Hello World..");
},2000);
console.log(id1);

let id2=setInterval(()=>{
    console.log("Hello World..");
},3000);
console.log(id2);*/

let object = {
    sname: "vishal",
    age: 22,
    marks: 98,
    getData: function () {
        console.log(this);//object
        return this.sname;
    },
    getInfo: () => {
        console.log(this);//Global Scope
        return this.sname;
    },
    setTime: function () {
        setTimeout(function () {
            console.log(this);
            console.log(this.age);
        }, 1000);
    },
    setInter: function () {
        setTimeout(() => {
            console.log(this);
            console.log(this.age);
        }, 2000);
    }
}

let data=object.getData('onkar');
console.log(data);
let info=object.getInfo('onkar');
console.log(info);

console.log(object.setTime(21));
console.log(object.setInter(21));