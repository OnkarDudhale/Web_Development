const express = require('express');
const app = express();

let port = 3000;
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('This is the Root Path.');
});

app.get('/:username/:id', (req, res) => {
    let { username, id } = req.params;
    let data = `<i>This is @${username} id:${id}<i>`;
    res.send(data);
});

app.get('/search', (req, res) => {
    let { q } = req.query;
    if (!q) {
        res.send(`Nothing to search..`);
    } else {
        res.send(`Search for the ${q}`);
    }
});
// app.get('/about',(req,res)=>{
//     res.send('This is about section.');
// });

// app.get('/contact',(req,res)=>{
//     res.send('This is a contact page.');
// });

// app.post('/post',(req,res)=>{
//     res.send('post method');
// });

// app.get('/*splat', async (req, res) => {
//     res.send('This Page is Not exist..');
// });

// app.use((req,res)=>{
//     console.log('request received');
//     // res.send('<h4>response send through web browser..</h4>');
//     res.send('<h2>Cars</h2><ul><li>Mercedez</li><li>lamborgini</li></ul>')
//     // res.send({
//     //     name:'response'
//     // });
// })
