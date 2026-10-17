// object literals
let student={
    name:"onkar",
    percentage:98,
    class:"BCS"
};

console.log(student);

const post={
    username:"onkar_dudhale",
    content:"Gaming",
    likes:"100K",
    reposts:10,
    tag:["@anu","@venzo"]
};

console.log(post);
console.log(post.username);

let prop="reposts";
console.log(post[prop]);
console.log(post.prop);

const car={
    cName:"GWagon",
    color:["black","white"],
    model:2341,
    date:"2-2-24"
};
console.log(car);

car.prize=40000000;
console.log(car);

car.prize=50000000;
console.log(car);

console.log(delete car.model);
console.log(car);

//object of objects
const cars={
    lambo:{
        color:"blue",
        model:123,
        prize:80000000
    },
    bently:{
        color:"white",
        model:12,
        prize:100000000
    },
    avator:{
        color:"golden",
        model:11,
        prize:70000000
    }
};
console.log(cars);
console.log(cars.bently.prize);

// array of objects
const students=[
    {
        sName:"onkar",
        age:21,
        class:"MCS"
    },
    {
        sName:"vishal",
        age:22,
        class:"MCS"
    },
    {
        sName:"anurag",
        age:22,
        class:"BCS"
    }
]
console.log(students);

// Math object
let value=Math.random()*10;
console.log(value);
let num=Math.floor(value)+1;//(*10) for get values 0 to !=10 / we want 1 to =10 so(+1) added
console.log(num);
console.log(`absolute value:${Math.abs(num)}`);
console.log(`power value:${Math.pow(num,num)}`);
console.log(`value down to integer:${Math.floor(value)}`);
console.log(`value top to integer:${Math.ceil(value)}`);
