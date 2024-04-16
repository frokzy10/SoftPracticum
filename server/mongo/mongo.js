
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/usersbox")
.then(() => {
    console.log("Монго подключен");
})
.catch(()=>{
    console.log('Failed');
})

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const users = mongoose.model("users",userSchema);

module.exports = users