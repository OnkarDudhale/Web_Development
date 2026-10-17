// let h3=document.querySelector("h3");
// let h5=document.querySelector("h5");
// let para=document.querySelector("p");
// let btn=document.querySelector("button");

// function setColor(){
//     this.style.color="green";
// }

// h3.addEventListener("click",setColor);
// h5.addEventListener("click",setColor);
// para.addEventListener("click",setColor);
// btn.addEventListener("click",setColor);


//keyboard events
// let inp=document.querySelector("input");
// inp.addEventListener("keydown",function(event){
//     console.log(event);
//     if(event.code=="KeyA"){
//         console.log("turn left");
//     }
//     console.log("key pressed");
// })
// inp.addEventListener("keyup",function(event){
//     console.log(event);
//     console.log("key relesed");
// })


//form 
// let form=document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();

//     console.log(form.elements);
//     let user=this.elements[0];
//     let pass=this.elements[1];
//     console.log(user.value);
//     console.log(pass.value);
// })



//more events
let user = document.querySelector("#user");

user.addEventListener("change", function () {
    console.log("final state : " + user.value);
})
user.addEventListener("input",function(){
    console.log("input step state : "+ user.value);
})