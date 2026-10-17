let maxNum=prompt("Enter MAX value for guessing correct number:");
console.log(maxNum);
let randomNum=Math.floor(Math.random()*maxNum)+1;
while(true){
    let guessNum=prompt("Enter number:");
    if(guessNum=="quit"){
        console.log("User Quit.");
        break;
    }
    if(randomNum==guessNum){
        console.log(`Congretulations Right Guess..`);
        console.log(`Number is right:${randomNum}`);
        break;
    }else if(randomNum>guessNum){
        console.warn(`Your value ${guessNum} is low. Try to enter higher value...`);
    }else{
        console.warn(`Your value ${guessNum}  is high. Try to enter lower value...`);
    }
}