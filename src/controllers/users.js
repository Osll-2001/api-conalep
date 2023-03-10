const UsersService=require('../services/users')

const UsersController={

    get:async (req,res)=>{

        try{
            const users=await UsersService.get();
            res.status(200).json({data:users});
        }catch(err){
            res.status(404).json({message:err.message});
        }
    },
    
    getById:async (req,res)=>{
        const {id}=req.params;

        try{
            const user=await UsersService.getById(id);
            res.status(200).json({data:user});
        }catch(err){
            res.status(404).json({message:err.message});
        }
    },

    create: async (req,res)=>{
        const {body}=req;

        try{
            const userNew=await UsersService.create(body);
            res.sendStatus(201);
        }catch(err){
            res.status(500).json({message:err.message});
        }
    }
}

module.exports=UsersController