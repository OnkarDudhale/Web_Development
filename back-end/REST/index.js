const express=require('express');
const app=express();

const port=8080;
const path=require('path');

const methodOverride=require('method-override');
app.use(methodOverride('_method'))

app.use(express.urlencoded({extended:true}));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'public')));
const {v4:uuidv4}=require('uuid'); //id




let posts=[
    {
        id:uuidv4(),
        username:'onkarDudhale',
        content:'My life my rule'
    },{
        id:uuidv4(),
        username:'vishal',
        content:'Growth'
    },{
        id:uuidv4(),
        username:'abhijeet',
        content:'Just Do IT'
    }
]

app.listen(port,(req,res)=>{
    console.log(`app listening on port : ${port}`)
});

app.get('/posts',(req,res)=>{
    res.render('index.ejs',{posts});
});

app.get('/posts/new',(req,res)=>{
    res.render('userForm.ejs');
})

app.post('/posts',(req,res)=>{
    const {username,content}=req.body;
    let id=uuidv4();
    posts.push({id,username,content});
    res.redirect('/posts');
})

app.get('/posts/:id',(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id === p.id)
    res.render('userDesc.ejs',{post});
})


//edit
app.get('/posts/:id/edit',(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=> id === p.id)
    res.render('userEdit.ejs',{post});
})


//update
app.patch('/posts/:id',(req,res)=>{
    const {id}=req.params;
    let newContent=req.body.content;
    let post=posts.find((p)=> id ===p.id);
    post.content=newContent;
    res.redirect('/posts');
})

//delete
app.delete('/posts/:id',(req,res)=>{
    const {id}=req.params;
    posts=posts.filter((p)=>id !== p.id);
    res.redirect('/posts');
})



