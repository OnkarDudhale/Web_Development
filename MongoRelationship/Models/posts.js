const mongoose = require('mongoose');
const { Schema } = require('mongoose');

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationship');
}
main().then(() => console.log('connection successfull..')).catch(err => console.log(err));


//Person Schema
const personSchema = new Schema({
    username: String,
    email: String,
})

//Post Middleware 
personSchema.post('findOneAndDelete', async (person) => {
    console.log("Post Middleware");
    if (person) {
        await Post.deleteMany({ user: person._id });
        console.log('deleted !');
    }
})

//Person Model
const Person = mongoose.model('Person', personSchema);

//Posts Schema
const postSchema = new Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Person'
    }

})

//Posts Model
const Post = mongoose.model('Post', postSchema);

//Add data function
const addData = async () => {
    const user1 = new Person({
        username: 'onkar',
        email: 'onkardudhale@gmail.com'
    });

    // const user1=await Person.findOne({username:'onkar'})
    const post1 = new Post({
        content: 'Well done !',
        likes: 25,
    });

    post1.user = user1;

    await user1.save();
    await post1.save();
}
// addData();


//Get Data function
const getData = async () => {
    const info = await Post.find({}).populate('user', 'username');
    console.log(info);
}
// getData();


const delUser = async () => {
    const user = await Person.findByIdAndDelete('6880f2bcfbc4bf830f0a23c3');
    console.log(user);
}
// delUser();
