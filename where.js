var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Mayuri@123",
    database: "mydb"
});

con.connect(function(err){
    if (err) throw err;
    con.query("SELECT * FROM customers WHERE address = 'park lane 38'",function(err,result){
        if (err) throw err;
        console.log(result);
    });
});