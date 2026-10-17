console.log("Hello JavaScript..");
//template literals
let fName = "Onkar Dudhale";
let info = `Hello My name is ${fName}`;
console.log(info);

// vote age
let age = 18;
if (age >= 18) {
    console.log("Valid age for voting..");
} else {
    console.log("He/She can't vote..");
}

// trafic light
let color = "green";
if (color == "red") {
    console.log("STOP");
}
else if (color == "green") {
    console.log("GO!");
}
else {
    console.log("WAIT...");
}

//popcorn price
let size = "L";
if (size == "XL") {
    console.log(`Price is Rs. 250 for ${size} size`);
} else if (size == "L") {
    console.log(`Price is Rs. 200 for ${size} size`);
} else if (size == "M") {
    console.log(`Price is Rs. 100 for ${size} size`);
} else {
    console.log(`Price is Rs. 50 for ${size} size`);
}

//shirt size nested-if else
let pattern = "round";
let sColor = "white";
if (pattern == "round") {
    if (sColor == "black") {
        console.log("don't buy");
    }
    else if (sColor == "red") {
        console.log("don't buy");
    }
    else if (sColor == "white") {
        console.log("buy");
    }
    else {
        console.log("color not found..");
    }
}
else {
    console.log("pattern not found ...");
}

// good string
let str = "apple";
if (str[0] === "a" && str.length > 3) {
    console.log("Good String..");
} else {
    console.log("Not a good string..");
}

// switch case light
let c = "green";
switch (c) {
    case "green":
        console.log("GO!");
        break;
    case "red":
        console.log("STOP!");
        break;
    case "yellow":
        console.log("WAIT!");
        break;
    default:
        console.log("Broken Light");
}

//switch case week day
let dayNum = 3;
switch (dayNum) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break; 
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Not a Day....");    
}