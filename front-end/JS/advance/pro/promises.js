function storeData(data) {
    return new Promise((resolve, reject) => {
        let intSpeed = Math.floor(Math.random() * 10) + 1;
        if (intSpeed > 4) {
            resolve('success : Internet speed fast / normal');
        } else {
            reject('faliure : Internet speed slow / weak');
        }
    })
}

// storeData('onkar dudhale').then(() => {
//     console.log('success : Internet speed fast / normal');
// }).catch(() => {
//     console.log('faliure : Internet speed slow / weak');
// })

//promise chaining
let obj = storeData('onkar dudhale').then((result) => {
    console.log(result);
    return storeData('class : Mcs Comp. Sci.');
}).then((result) => {
    console.log(result);
    return storeData('college name : RBNB College');
}).then((result) => {
    console.log(result);
})
    .catch((error) => {
        console.log(error);
    })

let h2 = document.querySelector('h2');

function colorChange(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h2.style.color = color;
            resolve('success');
        }, delay);
    })
}

colorChange('red', 1000).then((result) => {
    console.log(result);
    return colorChange('yellow',1000);
}).then((result)=>{
    console.log(result);
})