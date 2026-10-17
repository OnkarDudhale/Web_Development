let express = require('express');
let app = express();
let ExpressError=require('./ExpressError');


app.listen(8080, (req, res) => {
    console.log('server start on port 8080');
})

// app.use((req, res, next) => {
//     console.log('First Middleware..');
//     next();
// })

// app.use((req, res) => {
//     console.log('Second Middleware');
//     next();
// })

//***Logger***
// app.use((req,res,next)=>{
//     let date=new Date(Date.now());
//     req.date=date.toString();
//     console.log(req.method,req.url,req.hostname,req.date);
//     return next();
// })

//for special path
// app.use('/page',(req,res,next)=>{
//     console.log(req.method,req.hostname,req.path);
//     next();
// })

//example ***authentication*** for to access data
// app.use('/api', (req, res, next) => {
//     let { token } = req.query;
//     if (token === 'giveaccess') {
//         return next();
//     }
//     res.send('Access Denied !');
// })

//multi middleware support
const checkToken=((req,res,next)=>{
    let {token}=req.query;
    if(token==='giveaccess'){
        return next();
    }
    throw new ExpressError(404,'Access Denied !'); //error object
})

//multi middleware
app.get('/api',checkToken,(req,res)=>{
    res.send('data');
})
app.get('/apiData',checkToken,(req,res)=>{
    res.send('data');
})

app.get('/pathError',(req,res)=>{
    abcd=abcd;    
})


//admin activity
app.get('/admin',(req,res)=>{
    throw new ExpressError(403,'Unauthrized access !');
})

//error handling
app.use((err,req,res,next)=>{
    let {status=500,message}=err;
    //status code undefined then we can set default status code
    res.status(status).send(message);
    next(err);
});


app.get('/', (req, res) => {
    res.send('This is a root page.');
})

app.get('/page', (req, res) => {
    res.send('page found..');
})


// app.use((req, res, next) => {
//     res.send('page not found...');
//     next();
// })



//for async errors

// Try-catch block
// try {
    
// } catch (error) {
    
// }


//asyncWrap function
// function asyncWrap(fn){
//     return function(req,res,next){
//         fn(req,res,next).catch((err)=>{
//             next(err);
//         })    
//     }
// }
// call asyncWrap function through http requests to handle errors



