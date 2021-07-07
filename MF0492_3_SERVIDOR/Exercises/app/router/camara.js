const express = require('express');
const router = express.Router();
var path = require("path");
const pool = require(path.join(__dirname,'../db.js'));

//Camara
router.get("/camara/:id",(req,res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err;
        console.log('connected as id ' + connection.threadId);
        connection.query('SELECT * FROM camara WHERE cod = ?',[req.params.id],(err,rows,fields)=>{   
            if(!err)   
            res.render("camara", {
                rows,
            });
            else  
                console.log(err);                
        })  
    });
}); 
module.exports = router;