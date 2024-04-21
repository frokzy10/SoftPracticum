const userService = require("../services/user-service");

class UserController {
    async register(req, res, next) {
        try {
            const {email, password} = req.body;
            const userData = await userService.registration(email, password);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
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

        } catch (e) {

        }
    }

    async activate(req, res, next) {
        try {
            const activationLink = req.params.link;
            await userService.activate(activationLink);
            return res.redirect(process.env.CLIENT_URL);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Произошла ошибка при активации учетной записи' });
        }
    }

    async refresh(req, res, next) {

    }

    async getUsers(req, res, next) {
        try {
            res.json(['123', "234"])
        } catch (e) {

        }
    }
}

module.exports = new UserController()