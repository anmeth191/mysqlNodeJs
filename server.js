//create the connection to my database and return the status

// const mysql = require('mysql');
// const connectionDB = mysql.createConnection({
//    host:'localhost',
//    user:'root',
//    password:'1234',
//    database:'test'
// });

// connectionDB.connect((error)=>{
//     if(error){
//         throw error
//     }else
//     console.log('Connected to in the database');
// })

//create my server 
const express = require('express');
const getController = require('./controllers/getController');
const app = express();
const cors = require('cors');
const postController = require('./controllers/postController');
app.use(cors({}));
app.set('view engine' , 'ejs');
app.use(express.json());
getController(app);
postController(app);
app.listen(8080 , ()=>{ console.log('connected to the data base in port 8080')});

