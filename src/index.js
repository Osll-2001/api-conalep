const express=require("express");
const app=express();
const routerApi=require('./routes/main')
const port=5000;

app.use(express.json());

routerApi(app);


app.listen(port,()=>{
    console.log("inicio servidor");
})