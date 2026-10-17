// function expretion
//act like variable as a function
let sum=function(a,b){
    return a+b;
};
console.log(sum(10,20));
console.log(sum);

//Higher order function
let msg=function(func,n){
    for(let i=0;i<n;i++){
        func();
    }
}
let greet=function(){
    console.log("Hello!");
}
//function as a variable
msg(greet,10);

//function as a parameter
msg(function(){console.log("namste..")},5);


//Higher order function return
let request=function(req){
    if(req=="odd"){
        return function(n){
            console.log(n%2!=0);
        }
    }else if(req=="even"){
        return function(n){
            console.log(n%2==0);
        }
    }else{
        console.log("Wrong request..");
    }
}
let req="odd"
let cal=request(req);
let num=9;
cal(num);

//object methods
let calculate={
    add:function (a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    },
    div:function(a,b){
        return a/b;
    }
};

console.log(calculate);
console.log(calculate.add);
console.log(calculate.mul(5,4));
//shorthand
calculate={
    add(a,b){

    },
    sub(a,b){

    },
    mul(a,b){

    },
    div(a,b){

    }
}
