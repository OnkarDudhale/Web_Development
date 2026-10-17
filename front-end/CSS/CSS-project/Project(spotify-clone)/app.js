let bar = document.querySelector('#bar');
let close=document.querySelector('.close');
let sidebar = document.querySelector('.block');


bar.addEventListener('click',()=>{
    sidebar.classList.remove('none'); 
    close.classList.remove('none');
    bar.style.display='none';
})
close.addEventListener('click',()=>{
    sidebar.classList.add('none'); 
    close.classList.add('none');
    bar.style.display='block';
})