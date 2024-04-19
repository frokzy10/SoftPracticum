const userService = require("../services/user-service");
class UserController {
    async register(req, res, next) {
        try {
            const {email,password} = req.body;
            const userData = await userService.register(email,password);
            res.cookie('refreshToken',userData.refreshToken,{maxAge:10*24*60*60*1000,httpOnly:true})
            return res.json(userData);
        } catch (e) {
            console.log(e)
        }
    }

    async login(req, res, next) {
        try {

        } catch (e) {

        }
    }

    async logout(req, res, next) {
        try {

        }catch (e){

        }
    }

    async activate(req, res, next) {
        try {

        }catch (e){

        }
    }
    async refresh(req,res,next){

    }
    async getUsers(req,res,next){
        try {
            res.json(['123',"234"])
        }catch (e){

        }
    }
}

module.exports = new UserController()