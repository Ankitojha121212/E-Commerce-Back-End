
/**
 * 
 * POST (create)
 * 
 * i need to intercept this
 * 
 */

const authController = require("../controllers/auth.controller");


module.exports = (app) =>{
    app.post("/eCommPro/api/v1/auth/signup",authController.signup);
}