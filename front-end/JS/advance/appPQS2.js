//-mouseout-keypress-Scroll-load

let inp=document.querySelector('input');
let btn=document.querySelector('button');
let textarea=document.querySelector('#text');
btn.addEventListener("mouseout",function(){
    console.log("mouse out of the element");
    let action=document.querySelector('#text');
    action.append("mouse out\n");
    console.dir(this);
})
inp.addEventListener("keypress",function(){
    console.log("key press in the element");
    let action=document.querySelector('#text');
    action.append("key press\n");
    console.dir(this);
})

window.addEventListener('load',function(){
    console.log("window loaded");
})

textarea.addEventListener('scroll', function(){
    console.log("text-area scrolled");
})


let bt=document.createElement('button');
let body=document.querySelector('body');
body.append(bt);
bt.innerText="click me";
bt.addEventListener('click',function(){
    bt.style.color='red';
})

let fname=document.querySelector("#name");
let data=document.querySelector('h2');
fname.addEventListener('input',function(){
    // data.innerText=this.value;
    let inp=fname.value;
    data.innerText = inp.replace(/[^a-zA-Z\s]/g, '');
})