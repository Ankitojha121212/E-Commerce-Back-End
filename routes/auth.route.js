
/**
 * /eCommPro/api/v1/auth/signup
 * POST (create)
 * 
 * i need to intercept this
 * 
 */

const authController = require("../controllers/auth.controller");

const authMw = require("../middlewares/auth.mw");

module.exports = (app) =>{
    app.post("/eCommPro/api/v1/auth/signup",[authMw.verifySignUpBody],authController.signup);
    
    /**
     *  POST call for the url is
     * 
     * /eCommPro/api/v1/auth/signin
     * 
    */
   
   app.post("/eCommPro/api/v1/auth/signin",authController.signin)
   
}