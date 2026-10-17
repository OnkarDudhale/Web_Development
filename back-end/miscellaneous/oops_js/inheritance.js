class college{
    constructor(name,address){
        console.log('base class');
        this.name=name,
        this.address=address
    };
    talk(){
        console.log(`College name is ${this.name} and college address: ${this.address}`);
    }
}

class student extends college{
    constructor(studName,div,name,address){
        super(name,address),
        this.studName=studName,
        this.div=div;
    }
}

class teacher extends college{
    constructor(teachName,subject,name,address){
        super(name,address)
        this.teachName=teachName,
        this.subject=subject
    }
}