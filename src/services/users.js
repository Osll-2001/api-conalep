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
            await conexion.query(`INSERT INTO users(userName,userEmail,userPass) VALUES('${userName}','${userEmail}','${userPass}')`);
        }catch(err){
            throw Error('Error',err);
        }
    },

    updateCompĺete: async (id,{userName,userEmail,userPass})=>{
        try{
            await conexion.query(`UPDATE users SET userName='${userName}', userEmail='${userEmail}', userPass='${userPass}' WHERE userId='${id}'`);
        }catch(err){
            throw Error('Error: ',err);
        }
    },

    delete: async (id)=>{
        try{
            await conexion.query(`DELETE FROM users WHERE userId='${id}'`); 
        }catch(err){
            throw Error('Error:', err);
        }
    }
    
}

module.exports=UsersService