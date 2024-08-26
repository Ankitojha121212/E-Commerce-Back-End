/**
 * 
 * I need to write the controller logic  to sign up the user
 */
const bcrypt = require("bcryptjs");
const user_model = require("../models/user.model");

exports.signup  = async (req,res) =>{
    /** 
     * Logic to create the logic of user
     */

    // 1. Read the request body
        const request_body = req.body
    // 2. Insert the data in the users collection in MongoDB
        const userObj = {
            name : request_body.name,
            userId : request_body.userId,
            email : request_body.email,
            userType : request_body.userType,
            password : bcrypt.hashSync(request_body.password,8) 
        }

        try{
           const userCreated =  await user_model.create(userObj);
        
           /**
            * Return the user
            * 
            * 201 shows the successfully created
            */

           res.status(201).send(userCreated);
        
        }catch(err){
            console.log("The error is occured while creating a user : ",err);
            res.status(500).send({
                message : "Some error happend while creating the New User"
            })
        }
    // 3. Return the response back to the user  
        

}