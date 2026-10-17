let btn=document.querySelector("button");
let block=document.querySelector("div");
let h2=document.querySelector("h2");


btn.addEventListener("click",function(){
    let randomColor=getRandomColor();
    h2.innerText=randomColor;
    block.style.backgroundColor=randomColor;
})

function getRandomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);

    let color=`rgb(${red},${green},${blue})`;
    return color;
}