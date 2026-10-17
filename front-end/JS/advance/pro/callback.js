//callback hell
console.warn('callback hell');

let h2=document.querySelector('h2');
function callback(color,delay,nextCall){
    setTimeout(()=>{
        h2.style.color=color;
        if(nextCall) nextCall();
    },delay);
}
callback('red',1000,()=>{
    callback('yellow',1000,()=>{
        callback('green',1000);
    });
});


function storeData(data,success,failure){
    let intSpeed=Math.floor(Math.random()*10)+1;
    if(intSpeed>4){
        success();
    }else{
        failure();
    }
}

storeData('onkar dudhale',()=>{
    console.log('success');
    storeData('class:MCS',()=>{
        console.log('success');
        storeData('location:pune',()=>{
            console.log('success');
        },()=>{
            console.log('failure');
        })
    },()=>{
        console.log('failure');
    })
},()=>{
    console.log('failure');
})
