const express = require('express');
const router = express.Router();
var path = require("path");
const pool = require(path.join(__dirname,'../db.js'));

//Usuarios
router.get("/usuarios/:dni",(req,res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err;
        console.log('connected as id ' + connection.threadId);
        connection.query('SELECT * FROM usuario WHERE dni = ?',[req.params.dni],(err,rows,fields)=>{   
            if(!err)   
            res.render("usuarios", {
                rows,
            });
            else  
                console.log(err);                
        })  
    });
}); 
module.exports = router;