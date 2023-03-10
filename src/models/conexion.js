const {Pool}=require("pg");


const conexion=new Pool({
    host:'localhost',
    user:'postgres',
    password:'lenovo01',
    database:'api-conalep',
    port:'5432'
})

module.exports=conexion;