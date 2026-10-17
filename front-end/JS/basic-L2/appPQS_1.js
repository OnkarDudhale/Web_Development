// Create a program that generates a random number representing a dice roll.[The number should be between 1 and 6]
let dice=Math.floor(Math.random()*6)+1;
console.log(`dice throw:${dice}`);

// Create an object representing a car that stores the following properties for the car:name,model,color. Print the car's name
const car={
    name:"mercedez",
    model:"j=h21",
    color:"black"
};
console.log(car);
console.log(car.name);

// Create an object Person with their name,age and city.Edit their city’s original value to change it to“NewYork”. Add a new property country and set it to the United States
const Person={
    name:"Willam",
    age:32,
    city:"London"
};

Person.city="New York";
Person.country="United States";
console.log(Person);