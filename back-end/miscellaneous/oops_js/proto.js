//factory function

function personMaker(name, age) {
    const person = {
        name: name,
        age: age,
        talk(name) {
            console.log(`MY name is ${name}`);
        }
    };

    return person;
}


//constructor

function Person(name, age) {
    this.name=name,
    this.age=age
};

Person.prototype.talk=function(){
    console.log(`My name is ${this.name}`);
}



//class

class Persons{
    constructor(name,age){
        this.name=name,
        this.age=age
    };

    talk(){
        console.log(`MY name is ${this.name}`);
    }
}



