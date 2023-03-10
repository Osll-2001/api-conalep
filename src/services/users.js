const conexion=require('../models/conexion');

const UsersService={

    get:async ()=>{
        try{
        const response=await conexion.query(`SELECT * FROM users`);
        return response.rows;
        }catch(err){
            throw Error("Error: ",err)
        }
    }, 

    getById: async (id)=>{
        try{
            const {rows}=await conexion.query(`SELECT * FROM users WHERE userId=${id}`);
            return rows;
        }catch(err){
            throw Error('Error',err);
        }
    },

    create: async ({userName,userEmail,userPass})=>{
        try{ 
            const userNew=await conexion.query(`INSERT INTO users(userName,userEmail,userPass) VALUES('${userName}','${userEmail}','${userPass}')`);
        }catch(err){
            throw Error('Error',err);
        }
    }
    
}

module.exports=UsersService