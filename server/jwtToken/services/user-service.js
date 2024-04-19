const UserModel = require("../model/user-model");
const bcrypt = require('bcrypt');
const uuid = require("uuid");
const mailService = require("../services/mail-service");
const tokenService = require("../services/token-service");
const UserDto = require("../dtos/user-dtos")

class UserService {
    async register(email,password){
        const candidate = await UserModel.findOne({email});
        if(candidate){
            throw new Error(`Пользователь с почтовым адресом ${email} уже сущуствует`)
        }
        const hashPassword = await bcrypt.hash(password,3);
        const activationLink = uuid.v4()
        const user = await UserModel.create({email,password:hashPassword,activationLink});
        await mailService.sendActivationMain(email,activationLink);
        const userdto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userdto});
        await tokenService.saveToken(userdto.id, tokens.refreshToken);
        return {...tokens,user:userdto}
    }
}

module.exports = new UserService();