// we need an env file 
// i want to use the .env file variables here 

// ----------------------
// to use env variable we can use ilke

const {DB_HOST,DB_USERNAME,DB_PASSWORD,DB_NAME} = process.env;

var mysql = require('mysql');


// to create connection with my sql 

// mysql.createConnection(we pass an object here 
//     where we can pass host :
//     use name 
//     DB_PASSWORD
//     DB_NAME
// );

var conn = mysql.createConnection({
    host: DB_HOST,
    user: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME
    // }).then((connection) => {
    //     console.log("connection is established");
    //     connection.end();
    //     }).catch((err) => {
    //         console.log("error in connection",err);
    //         });

});

conn.connect(function(err){
    if(err) throw err;
    console.log(DB_NAME+"Database is connectes ! ");
});