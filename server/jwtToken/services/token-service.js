const jwt = require("jsonwebtoken");
const tokenModel = require("../model/token-model")

class TokenService{
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, jwt_nurdinTop_secret_access, {expiresIn: '15s'})
        const refreshToken = jwt.sign(payload, jwt_nurdinTop_secret_refresh, {expiresIn: '30s'})
        return {
            accessToken,
            refreshToken
        }
    }
    async saveToken(userId, refreshToken) {
        const tokenData = await tokenModel.findOne({user: userId})
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }
        const token = await tokenModel.create({user: userId, refreshToken})
        return token;
    }
}
module.exports = new TokenService();