const express=require('express');
const app=express();
const port=3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/register',(req,res)=>{
    const {user,password }=req.query;
    res.send(`GET Response ${user}`);
})

app.post('/register',(req,res)=>{
    const {user,password} =req.body;
    res.send(`POST Response ${user} `);
})
app.listen(port,(req,res)=>{
    console.log('app listening on port 3000');
})


