const express =require('express');
const db = require('../db');

const emprouter = express.Router();

emprouter.get("/",(request,response)=>{
    let qry = "select * from employee_tb";
    db.query(qry,(error,result)=>{
        if(error){
            response.send(error);
        }
        else{
            response.send(result);
        }
    })
})

emprouter.post("/",(request,response)=>{
    let qry = `insert into employee_tb(e_name,email,password,emp_id,dname,doj) values('${request.body.e_name}','${request.body.email}','${request.body.password}',${request.body.emp_id},'${request.body.dname}','${request.body.doj}')`;
    db.query(qry,(error,result)=>{
        response.setHeader("Content-Type","application/json");
        if(error){
            response.send(error);
        }
        else{
            var data = JSON.stringify(result) 
            response.send(result);
        }
    })
})

emprouter.put("/:id",(request,response)=>{
    let qry = `Update employee_tb set e_name='${request.body.e_name}' where id=${request.params.id}`
    db.query(qry,(error,result)=>{
        response.setHeader("Content-Type","application/json");
        if(error){
            response.send(error);
        }
        else{
            response.send(result);
        }
    })
})
emprouter.delete("/:id",(request,response)=>{
    let qry = `delete from employee_tb where id=${request.params.id}`
    db.query(qry,(error,result)=>{
        response.setHeader("Content-Type","application/json");
        if(error){
            response.send(error);
        }
        else{
            response.send(result);
        }
    })
})

module.exports = emprouter;