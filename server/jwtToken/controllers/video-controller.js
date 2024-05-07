const ApiError = require("../exceptions/api-error")
const UserModel = require("../model/user-model")

class VideoController{
    async videoUpdate(req,res,next){
        try {
            const filePath =req.file.path;
            const userId = req.body.id;
            const user = UserModel.findOne(userId);
            if (!user) {
                return res.status(404).send('Пользователь не найден');
            }
            user.videoPath = filePath;
            await user.save();
            return user;
        }catch (e){
            console.log(e)
        }
    }
}
module.exports = new VideoController()