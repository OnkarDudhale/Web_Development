const Chat = require('./models/chat.js');

const express = require('express');
const app = express();

const mongoose = require('mongoose');
const path = require('path');

const expressError = require('./expressError.js');

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));


const methodOverride = require('method-override');
app.use(methodOverride('_method'));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/chatsapp');
}
main().then((res) => {
    console.log('connection successful..');
}).catch((err) => {
    console.log(err);
});

//error handling function
function asyncWrap(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch((err) => { next(err); });
    }
}



// let chat1=new Chat({
//     from:'ashvin',
//     to:'vedant',
//     msg:'Send me the pic of group festival.',
//     created_at:new Date()
// });

// chat1.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

const port = 3000;
app.listen(port, (req, res) => {
    console.log(`app running on port ${port}...`);
});

app.get('/', (req, res) => {
    res.send('express app running.');
});

//Index route
app.get('/chats', async (req, res) => {
    let chats = await Chat.find();
    res.render('chats.ejs', { chats });
});

//New route
app.get('/chats/new', (req, res) => {
    res.render('newChat.ejs');
});

//Create route
app.post('/chats', async (req, res) => {
    const { from, msg, to } = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date(),
    });
    await newChat.save();
    // .then((res) => {
    //     console.log(res);
    // }).catch((err) => {
    //     console.log(err);
    // });
    res.redirect('/chats');
});

//Edit route
app.get('/chats/:id/chatEdit', asyncWrap(async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id)
    if (!chat) {
        throw new expressError(404, 'chat not found..');
    }
    res.render('editChat.ejs', { chat });
}));

//Update route
app.put('/chats/:id', asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let { newMsg } = req.body;
    if (!id || !newMsg) {
        throw next(new expressError(404, 'message cannot be send empty !'));
    }
    let updatedChat = await Chat.findByIdAndUpdate(id, { msg: newMsg }, { runValidators: true, new: true });

    res.redirect('/chats');
}));

//Delete route
app.delete('/chats/:id', async (req, res) => {
    let { id } = req.params;
    let deleteChat = await Chat.findByIdAndDelete(id);
    console.log(deleteChat);
    res.redirect('/chats');
})

const handleValidationError = (err) => {
    console.log('validation error occurred.');
    err.message = 'Validation failed: ' + Object.values(err.errors).map(e => e.message).join(', ');
    return err;
}

//for mongoose error
app.use((err, req, res, next) => {
    console.log('error name :' + err.name);
    if (err.name == 'ValidationError') {
        err = handleValidationError(err);
    }
    next(err);
})

//error handling middleware
app.use((err,req,res,next)=>{
    let {status=500,message='Some error occurred..'}=err;
    res.status(status).send(message);
})
