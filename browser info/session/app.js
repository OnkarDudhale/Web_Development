const express = require('express');
const app = express();
const path = require('path');
const flash = require('connect-flash');
const session = require('express-session')



//Session
const sessionOptions = { secret: 'adf23451dfga', resave: false, saveUninitialized: true }
app.use(session(sessionOptions));


//Connect flash for messages
app.use(flash());


//ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.listen(3000, (req, res) => {
    console.log('server running on 3000');
})

app.get('/', (req, res) => {
    res.send('root page !');
})

app.get('/test', (req, res) => {
    res.send('session test !');
})

app.get('/countSession', (req, res) => {
    if (req.session.count) {
        req.session.count++;
    } else {
        req.session.count = 1;
    }
    console.log(req.session);
    res.send(`session count ${req.session.count} times !`);
})

app.get('/register', (req, res) => {
    const { username } = req.query;
    if (!username) {
        return res.send('user need to register');
    }
    req.session.username = username;
    console.log(`Username : ${req.session.username}`);

    req.flash('status', 'User successfully registered !');
    res.redirect('/home');
})

app.get('/home', (req, res) => {
    res.locals.message = req.flash('status');
    res.render('user.ejs', { name: req.session.username });
})
