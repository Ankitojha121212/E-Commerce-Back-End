
/**
 * 
 * create a middleware will check if the request body is proper and correct
 */

const user_model = require('../models/user.model');

const verifySignUpBody =  async (req,res,next) => {

    try{

        {
            // check for the user name 
            if(!req.body.name){
                return res.status(400).send({
                    message : "Failed ! Name was not provided in request body"
                })
            }
            // check for the email
            if(!req.body.email){
                return res.status(400).send({
                    message : "Failed ! Email was not provided in request body"
                })
            }
            // check for the userId 
            if(!req.body.userId){
                return res.status(400).send({
                    message : "Failed ! userId was not provided in request body"
                })
            }
            // check if the user with same userId is already present 
            const user = await user_model.findOnde({userId : req.body.userId})

            if(user){
                res.status(400).send({
                    message : "Failed ! The User is already present with the same userId Please Change it"
                })
            }
            next()
        }
    }catch(err){
        console.log("Error while validating the user signUP : ",err);
        res.status(500).send({
            message : "Error while validating the request Body"
        })
    }
}

module.exports = {
    verifySignUpBody : verifySignUpBody
}