// document.getElementById(); //return Object
// document.getElementsByClassName(); //return Collection
// document.getElementsByTagName(); //return Collection

// let images=document.getElementsByClassName("oldImg");

// for(let i=0;i<images.length;i++){
//     console.dir(images[i]);
//     images[i].src="file:///D:/Web%20Development/HTML%20CSS%20JS/JS/advance/assets/spiderman_img.png";
// }


// console.dir(document.querySelectorAll(".box a"));
// element.document.getAttribute('id/class/tag');
// element.document.setAttribute('id/class/tag','value');

// let box = document.querySelector('.box');
// box.style.backgroundColor = 'pink';

// let classes = box.classList;
// console.log(classes);
// classes.add('color');
// console.log(classes);
// classes.remove('color');
// console.log("class removed...");
// console.log("Contains Property : " + classes.contains('color'));
// console.log(classes.toggle('color')); if present then remove otherwise add


let para=document.querySelector("p");
// console.log(para.parentElement);
let child=para.children;

let link=document.querySelector("a");
let parent=link.parentElement;
let nextSib=link.nextElementSibling;
let prevSib=link.previousElementSibling;


//adding elements in HTML page
let p=document.createElement('p');
let b=document.querySelector('.box');
p.innerText="hello! how are you?";
// b.appendChild(p);

//we add string also element at the end
b.append("hello how are you?");

//Add at the start 
let header=document.querySelector('h1');
let heading=document.createElement('h3');
heading.innerHTML="<i>Marval Super Hero </i>";
header.prepend(heading);

//add according position
let btn=document.createElement('button');
btn.innerText="I am fine!";
console.dir(btn);
b.insertAdjacentElement('beforeend',btn);



