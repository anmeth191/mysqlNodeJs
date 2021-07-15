const mysql = require('mysql');
let queryresults = {};

const connectionDB = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'1234',
    database:'test'
})

connectionDB.connect((err)=>{
   connectionDB.query('SELECT * FROM users' , (error , results , fields) =>{
    if(error) throw error;
     queryresults = results ;
});
    
})


module.exports = (app)=>{
app.get('/' , (request , response) =>{
     
    response.json({
        status:200,
        message:'Your request has been succesful',
        users:queryresults
    })
})

}