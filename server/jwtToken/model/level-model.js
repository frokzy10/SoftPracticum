const mongoose = require('mongoose');

const levelSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img:{
        type:String
    },
    isWon:{
        type:Boolean,
        default:false
    },
    condition:{type:String},
    conditionName:{type:String},
    conditionImg:{type:String},
    conditionVideo:{type:String},
    task:{type:String},
    responseMeasure:{type:String},
    realAnswer:{type:String},
    conditionLink:{type:String},
    sphere:{type:Array},
    isLevel1:{type:Boolean},
    isLevel2:{type:Boolean},
    isLevel3:{type:Boolean},
    isLevel4:{type:Boolean},
});

const Game = mongoose.model('Game', levelSchema);

module.exports = Game;
