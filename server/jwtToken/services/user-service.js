const UserModel = require("../model/user-model");
const bcrypt = require('bcrypt');
const tokenService = require("../services/token-service");
const UserDto = require("../dtos/user-dtos");
const uuid = require("uuid");
const mailService = require("./mail-service");

class UserService {
    async registration(email, password) {
        const candidate = await UserModel.findOne({email});
        if (candidate) {
            throw new Error(`Пользователь с почтовым адресом ${email} уже сущуствует`)
        }
        const activationLink = uuid.v4();
        const hashPassword = await bcrypt.hash(password, 3);

        const user = await UserModel.create({email, password: hashPassword, activationLink});
        await mailService.sendActivationMail(email, `http://localhost:8000/api/activate/${activationLink}`)
        const userdto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userdto});
        await tokenService.saveToken(userdto.id, tokens.refreshToken);
        return {...tokens, user: userdto}
    }

    async activate(activationLink) {
        const user = await UserModel.findOne({activationLink})
        if (!user) {

        }
        user.isActivated = true;
        await user.save();
    }
}
module.exports = new UserService();