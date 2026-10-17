function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve(num);
        }, 1000);
    })
}

async function demo() {
    await getNum();
    await getNum();
}

let h2 = document.querySelector('h2');
function colorChange(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5);
            if (num > 3) {
                reject('promise rejected');
            }

            h2.style.color = color;
            console.log('color changed to :'+color);
            resolve(color);
        }, delay);
    });
}

async function changeColor() {
    try {
        await colorChange('red', 1000);
        await colorChange('orange', 1000);
        await colorChange('yellow', 1000);
        await colorChange('violet', 1000);
        await colorChange('cyan', 1000);
    } catch (error) {
        console.log(error);
    }
    let num = 5;
    console.log(num);
}
