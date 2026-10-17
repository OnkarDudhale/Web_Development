const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')

app.use(cookieParser('secret'));

app.listen(3000, (req, res) => {
    console.log('server runnning on 3000');
})

app.get('/', (req, res) => {
    res.send('I am a root !');
});

app.get('/sendCookies', (req, res) => {
    res.cookie('greet', 'hello');
    res.send('Cookies !');
})
app.get('/sendAuthCookies', (req, res) => {
    res.cookie('username', 'onkar', { signed: true });
    res.cookie('email', 'onkardudhale@gmail.com', { signed: true });
    res.send('authorized cookies !');
})


app.get('/getCookies', (req, res) => {
    res.send('Cookies received !');
    console.log(req.cookies);
    console.log(req.signedCookies);
})

