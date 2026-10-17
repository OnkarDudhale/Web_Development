const mongoose = require('mongoose');
let Chat = require('./models/chat');

main().then((res) => {
    console.log('connection successful..');
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect('mongodb://localhost:27017/chatsapp');
};

let chats = [{
    from: 'onkar',
    to: 'abhijeet',
    msg: 'Which exam tommorow.',
    created_at: new Date()
},
{
    from: 'anurag',
    to: 'onkar',
    msg: 'Good morning.',
    created_at: new Date()
},
{
    from: 'abhijeet',
    to: 'vishal',
    msg: 'Whats up.',
    created_at: new Date()
},
{
    from: 'vishal',
    to: 'atharv',
    msg: 'Send tommorows exams previous quesion papers.',
    created_at: new Date()
},
{
    from: 'athrav',
    to: 'onkar',
    msg: 'Prepare yourself for tommorow exam.',
    created_at: new Date()
}
];

Chat.insertMany(chats);