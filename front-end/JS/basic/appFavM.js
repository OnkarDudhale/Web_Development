let favMovie="Avatar";
let guess=prompt("Enter Movie name:");

while(favMovie.toLowerCase()!=guess.toLowerCase()){
    if(guess.toLowerCase()=="quit" ){
        console.log("YOU QUIT...");
        break;
    }
    console.error("Wrong!")
    guess=prompt("Wrong! Try Again:");
    console.warn("if you want to exit Enter quit ..")
}

if(favMovie.toLowerCase()==guess.toLowerCase()){
    console.log("Congratulations you are right..");
}