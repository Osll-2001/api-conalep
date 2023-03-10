const express=require("express");
const app=express();
const routerApi=require('./routes/main')
const port=5000;

app.use(express.json());

routerApi(app);

app.get("/",(req,res)=>{
   res.send("<h1>Bienvenido a la API CONALEP</h1>")
})

app.listen(port,()=>{
    console.log("inicio servidor");
})