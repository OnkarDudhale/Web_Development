let express = require('express');
let app = express();

let port = 3000;
app.listen(port, () => {
    console.log(`Server is starting at port ${port}`);
});
app.get('/', (req, res) => {
    res.send('root path');
});

app.set('views engine', 'ejs');
app.get('/ig/:username', (req, res) => {
    const followers=['adi','bfs','abhi','cids'];
    let { username } = req.params;
    res.render('insta.ejs', { username , followers});
});