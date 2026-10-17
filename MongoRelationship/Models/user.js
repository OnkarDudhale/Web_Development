const mongoose=require('mongoose');
const {Schema}=require('mongoose');


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationship');
}

main().then(()=>{console.log("connection successfull..")}).catch(err=>{console.log(err)});

const userSchema=new Schema({
    username:String,
    address:[
        {
            location:String,
            city:String
        }
    ]
});

const User=mongoose.model('user',userSchema);

const addUsers=async ()=>{
    let user1=new User({
        username:'onkardudhale',
        address:[{
            location:'Pragatinagar',
            city:'Shrirampur'
        }]
    })
    user1.address.push({location:'haregoan phata',city:'Shrirampur'})
    await user1.save();
}

addUsers();