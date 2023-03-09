const UsersService=require('../services/users')

const UsersController={

    get:async (req,res)=>{
        const users=await UsersService.get();

        res.status(200).json({data:users});
    }
}

module.exports=UsersController