
/**
 * 
 * POST (create)
 * 
 * i need to intercept this
 * 
 */

const authController = require("../controllers/auth.controller");

const authMw = require("../middlewares/auth.mw");

module.exports = (app) =>{
    app.post("/eCommPro/api/v1/auth/signup",[authMw.verifySignUpBody],authController.signup);
}