let task=document.querySelector("#task");
let add=document.querySelector("button");
let list=document.querySelector("ul");

add.addEventListener('click',function(){
    let li=document.createElement('li');
    li.innerText=task.value;
    
    if(li.innerText!=''){
    let del=document.createElement('button');
    del.classList.add('del');
    del.innerText="del";
    li.prepend(del);
    list.append(li);
    task.value='';
    }
});

list.addEventListener('click',function(event){
    if(event.target.nodeName=='BUTTON'){
        let li=event.target.parentElement;
        li.remove();
    }
})

// let dl=document.querySelector('#del');
// function remove(){
//     for(let li=0 ;li<list.childElementCount;li++){
//         if(task.value==list.children[li].innerText){
//             list.children[li].remove();
//             console.log(li);
//             break;
//         }
        
//     }
//     task.value='';
// }
// dl.addEventListener('click',remove);