const Router = require('express').Router;
const router = new Router();
const userController = require("../controllers/user-controller");
const {body} = require("express-validator");
const authMiddleware = require("../middlewares/auth-middleware")

router.post("/auth",
    body("email").isEmail(),
    body("password").isLength({min:6,max:30}),
    userController.register);
router.post("/log_in",userController.login);
router.post("/logout",userController.logout);
router.get("/refresh",userController.refresh);
router.get("/activate/:link",userController.activate);
router.get("/users",authMiddleware,userController.getUsers)

module.exports = router;