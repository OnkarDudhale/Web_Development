let container=document.querySelector('body');


// let para=document.createElement('p');
// para.innerText="Hey I'm red!";
// para.classList.add('red');
// container.append(para);

// let heading=document.createElement('h3');
// heading.innerText="I'm a blue h3!";
// heading.classList.add('blue')
// container.append(heading);

// let div=document.createElement('div');
// div.classList.add('border');
// div.classList.add('bg');
// container.append(div);

// let h1=document.createElement('h1');
// h1.innerText="I'm in a div";
// div.append(h1);
// let p=document.createElement('p');
// p.innerText="ME TOO!";
// div.append(p);









// Create a new input and button element on the page using JavaScript only.Set the text of button to “Click me”.
let input=document.createElement('input');
input.type="text";
console.dir(input);

let btn=document.createElement('button');
btn.innerText="Click me";

container.append(input);
container.append(btn);


// Add following attributes to the element:-Change placeholder value of input to “username”-Change the id of button to “btn”.

// input.placeholder="username";
input.setAttribute('placeholder','username');
btn.setAttribute('id','btn');
console.dir(btn);

//Access the btn using the querySelector and button id.Change the button backgroundcolor to blue and textcolor to white
let butn=document.querySelector('#btn');
console.dir(butn);
butn.classList.add('btn_bg_text');

// Create an h1 element on the page and set its text to “DOM Practice” underlined.Change its color to purple
let h1=document.createElement('h1');
h1.innerText="DOM Practice";
h1.classList.add('underlinedColor');
container.append(h1);


// Create a p tag on the page and set its text to “Apna College Delta Practice”,where Delta is bold.
let para=document.createElement('p');
container.append(para);
para.innerHTML="<b>Apna College Delta Practice</b>";