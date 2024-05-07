const Router = require('express').Router;
const router = new Router();
const userController = require("../controllers/user-controller");
const VideoController = require("../controllers/video-controller")
const {body} = require("express-validator");
const authMiddleware = require("../middlewares/auth-middleware")
const gameController = require("../controllers/game-controller");

// VideoStorage
const multer = require("multer")
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./uploads")
    },
    filename:function (rqe,file,cb){
        cb(null,file.originalname)
    }
})
const upload = multer({storage})

router.post("/register",
    body("email").isEmail(),
    body("password").isLength({min: 6, max: 30}),
    userController.register);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.patch("/points", userController.updatePoints);
router.get("/refresh", userController.refresh);
router.get("/activate/:link", userController.activate);
router.get("/users", authMiddleware, userController.getUsers);
router.get("/games", gameController.getAllGame);
router.get("/games/:id", gameController.createGame);
router.post("/upload", upload.single('video'),VideoController.videoUpdate)

module.exports = router;