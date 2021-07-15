const bodyParser = require('body-parser');
const urlenCodedParser = bodyParser.urlencoded({extended:true});


//create the connection with mysql
const mysql = require('mysql');

const connectionDB = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'1234',
    database:'test'
})





module.exports = (app) =>{

app.post('/' , urlenCodedParser , (request , response) =>{
      
connectionDB.connect((error)=>{
    connectionDB.query(`INSERT INTO users (name, lastname) VALUES ('${request.body.name}' , '${request.body.lastName}')` , (error , results , field)=>{
        if(error) throw error;
        response.json({
            message:'A new user has been added at the dataBase succesfully'
        })
    })
    
})//end of the connection
})//end of the post request
}//end of the module export