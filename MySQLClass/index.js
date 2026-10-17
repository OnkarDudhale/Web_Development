// const { faker } = require('@faker-js/faker');
// // let data=[];
// for(let i=1;i<=20;i++){
//   data.push(getRandomUser());
// }
// let getRandomUser = () => {
//   return [
//     faker.string.uuid(),
//     faker.internet.username(),
//     faker.internet.email(),
//     faker.internet.password()
//   ];
// }
// let q='INSERT INTO users (id,username,email,password) VALUES ?';
// let users=[[uuidv4(),'onkar','onkar@gmail.com','onkar@123'],[uuidv4(),'vishal','vishal@gmail.com','vishal@123']];
// try {
//   connection.query(q,[data],(err, result) => {
//     if(err) throw err;
//     console.log(result);
//   })
// } catch (err) {
//   console.log(err);
// }

// connection.end();

const { v4: uuidv4 } = require('uuid');

const mysql = require('mysql2');

const express = require('express');

const path = require('path');

const app = express();

const methodOverride = require('method-override');

app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, '/public')));

//parse data 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'mysqlConnect',
  password: 'Onkar@2004'
});





const port = 8080;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

app.get('/', (req, res) => {
  let q = 'SELECT count(*) FROM users';
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]['count(*)'];
      res.render('home.ejs', { count });
    })
  } catch (err) {
    console.log(err);
  }
});

app.get('/users', (req, res) => {
  let q = 'SELECT * FROM users';
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      res.render('users.ejs', { data: result });
    })
  } catch (err) {
    console.log(err);
  }
});


app.get('/users/:id/edit', (req, res) => {
  const { id } = req.params;
  let q = `SELECT * FROM users WHERE id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      // console.log(result[0].username);
      let user = result[0];
      res.render('editName.ejs', { user });
    })
  } catch (err) {
    console.log(err);
  }
});

app.patch('/users/:id', (req, res) => {
  const { id } = req.params;
  const { username: newUsername, password: newPassword } = req.body;
  let q = `SELECT * FROM users WHERE id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if (user.password != newPassword) {
        res.send('Password is invalid.');
      }
      else {
        let q = `UPDATE users SET username='${newUsername}' WHERE id='${id}'`;
        connection.query(q, (err, result) => {
          if (err) throw err;
          res.redirect('/users');

        })

      }
    })
  } catch (err) {
    console.log(err);
  }
})

//add user

app.get('/newUser', (req, res) => {
  res.render('newUser.ejs');
});

app.post('/newUser', (req, res) => {
  const { username, password, email } = req.body;
  const id = uuidv4();
  let q = `INSERT INTO users VALUES('${id}','${username}','${email}','${password}')`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.redirect('/users')
    })
  } catch (err) {
    console.log(err);
  }
})

app.get('/users/:id/del', (req, res) => {
  const { id } = req.params;
  let q = `SELECT * FROM users WHERE id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render('userPassword.ejs', { user });
    })
  } catch (err) {
    console.log(err);
  }
})

app.delete('/users/:id/del', (req, res) => {
  const { id } = req.params;
  const { password } = req.body;
  let q = `SELECT * FROM users WHERE id='${id}'`;
  try {
    connection.query(q,(err,result)=>{
      if(err) throw err;
      let user=result[0];
      if(user.password===password){
       
        let q=`DELETE FROM users WHERE id='${id}'`;
        connection.query(q,(err,result)=>{
          if(err) throw err;
          res.redirect('/users');
        })
      }else{
        res.send('Password is invalid..');
      }
    });
  } catch (err) {
    console.log(err);
  }

})
