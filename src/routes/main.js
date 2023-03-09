const UsersRouter = require("./users");

const routerApi=(app)=>{
    app.use('/users',UsersRouter);
}

module.exports=routerApi;