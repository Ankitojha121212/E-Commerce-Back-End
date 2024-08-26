/**
 * Starting file of the project
 * 
 */

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const server_config = require("./configs/server.config")

const db_config = require("./configs/db.config");
// const { init } = require("./models/user.model");
const user_model = require("./models/user.model");
const bcrypt = require("bcryptjs");

app.use(express.json());//middleware

/** 
 *  Create an Admin user at the starting of the application
 * if not already present
*/

// connection with mongoDB
mongoose.connect(db_config.DB_URL);

const db = mongoose.connection;

db.once("open",()=>{
    console.log("The connection is successfully established between server and database")
    init()
})
db.on("error",()=>{
    console.log("The connection is not Established between the database and server");
})

 async function init(){

    try{
        let user = await user_model.findOne({userId : 'admin'})
        
            if(user){
                console.log("Admin is already created");
                return
            }
            
    }catch(err){
        console.log("Error While reading the admin data ",err);
    }


        try{
            user = await user_model.create({
                name : "Ankit",
                userId : "admin",
                userType : "ADMIN",
                email : "AnkitOjha121212@gmail.com",
                password : bcrypt.hashSync("Welcome1",8)
            })
            console.log("ADMIN Created : ",user);
        }catch(err){
            console.log("Admin is not created because : ",err);
        }
    }


/** 
 * start the server
*/

// connecting to the routes 

require("./routes/auth.route")(app);


app.listen(server_config.PORT ,() =>{
    console.log("Server is started at Port :",server_config.PORT);
})
