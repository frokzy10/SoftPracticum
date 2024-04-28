const GameModel = require("../model/level-model");
const ApiError = require("../exceptions/api-error")

class GameController {
    async createGame(req, res) {
        try {
            const findIdGame = await GameModel.findById(req.params.id);
            if (!findIdGame) {
                return ApiError.BadRequest("Такой id не найден");
            }
            res.json(findIdGame);
        } catch (error) {
            console.error("Ошибка при поиске игры:", error);
            res.status(500).json({error: "Ошибка сервера"});
        }
    }

    async getAllGame(req, res) {
        try {
            const response = await GameModel.find({});
            if (!response) {
                return ApiError.BadRequest('ошибка при подключении game');
            }
            res.json(response)
        } catch (e) {
            console.error("Ошибка при получении списка игр:", e);
            res.status(500).json({error: "Ошибка сервера"});
        }
    }

}

module.exports = new GameController();