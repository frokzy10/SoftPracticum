const express = require('express');
const users = require('./mongo/mongo');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.post("/log_in", async (req, res) => {
    const {email,password} = req.body;

    try {
        const check = await users.findOne({email: email,password: password});

        if (check) {
            res.json({message: "exist"});
        } else {
            res.json({message: "notexist"});
        }
    } catch (error) {
        console.log(error);
        res.json({message: "fail"});
    }
});

app.post("/auth", async (req, res) => {
    const {email, password} = req.body;
    const data = {
        email,
        password
    }

    try {
        const check = await users.findOne({email: email});

        if (check) {
            res.json({message: "exist"});
        } else {
            res.json({message: "notexist"});
            await users.insertMany([data]);
        }
    } catch (error) {
        res.json({message: "fail"});
    }
});

app.listen(8000, () => {
    console.log('Сервер запущен на порту 8000');
});
