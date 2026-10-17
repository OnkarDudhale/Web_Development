const mongoose = require('mongoose');
main().then((res) => {
    console.log('connection successful..');
}).catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect('mongodb://localhost:27017/test');
}

//schema
// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     age: Number
// });


// without defined schema
// const Employee=mongoose.model('Employee',new mongoose.Schema({}));

//model collection
// const User = mongoose.model('User', userSchema);


// const user1=new User({
//     name:'onkar',
//     email:'dudhaleonkar@gmail.com',
//     age:21
// });
// const user2=new User({
//     name:'vishal',
//     email:'vishal@gmail.com',
//     age:22
// });
// user1.save();

// user2.save().then((res)=>{
//     console.log(res)
// });

// User.insertMany([{
//     name:'anurag',
//     email:'anurag@gmail.com',
//     age:22
// },{
//     name:'abhijeet',
//     email:'abhijeet@gmail.com',
//     age:21
// },{
//     name:'abhay',
//     email:'abhay@gmail.com',
//     age:21
// }]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

//Find
// Model.find()
// Mongoose Queries are not promises. But they have a .then()


// User.find({age:{$gt:21}}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

//Update By id
// User.findById('682d637ff648a5d39c6c4bd1').then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

//Update one 
// User.updateOne({name:'abhay'},{$set:{name:'rahul',email:'rahul@gmail.com'}}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });


//First find and then Update
// User.findOneAndUpdate({ name: 'rahul' }, { name: 'abhay', email: 'abhay@gmail.com' }, { new:true }).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });


//First find by id and then Update
// User.findByIdAndUpdate('682d62bd1538430186a57bb7',{name:'abhi',email:'abhi@gmail.com'},{new:true}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });


//Delete one
// User.deleteOne({name:'abhay'}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// // Delete Many
// User.deleteMany({age:{$lt:22}}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// User.find({}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });




const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String
    },
    price: {
        type: Number,
        min: 1
    },
    discount: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        enum: ['fiction', 'non-fiction']
    }
});

const Book = mongoose.model('Book', bookSchema);

const book1 = new Book({ title: 'an elephant', author: 'vijay', price: 100 });

// book1.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });


//At the updation need to use runValidators:true for go according to schema validation
Book.findByIdAndUpdate('682de6d826d3b49019ada9a3', { price: 200 }, { runValidators: true }).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

Book.find({}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});



