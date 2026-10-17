const express=require('express');
const app=express();
const path=require('path');
let port=8080;

app.listen(port,()=>{
    console.log(`Port listening at ${port}...`);
})
app.get('/',(req,res)=>{
    res.send('Root File..');
});

//template 
app.set('view engine','ejs');
//set path if we run code from outer directories
app.set('views',path.join(__dirname,'/views'));

app.get('/about',(req,res)=>{
    res.render('about.ejs');
});

app.get('/rollDice',(req,res)=>{
    let diceRoll=Math.floor(Math.random()*6)+1; //Assume this is data from database
    res.render('dice.ejs',{diceRoll});
});
