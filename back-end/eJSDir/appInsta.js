let express = require('express');
let app = express();
let path=require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));

app.use(express.static(path.join(__dirname,'/public/css')));
app.use(express.static(path.join(__dirname,'/public/js')));

let port = 3000;
app.listen(port, () => {
    console.log(`server starting at port ${port}`);
});

app.get('/', (req, res) => {
    res.send('instagram home page.');
});


app.get('/ig/:username', (req, res) => {
    let data = require('./data.json');
    let { username } = req.params;
    let nameData = data[username];
    if (nameData) {
        res.render('instagram.ejs', { nameData });
    } else {
        res.send(`@${username} not such an account exist...`);
    }
});
