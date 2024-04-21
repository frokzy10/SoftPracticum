require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const router = require("./jwtToken/router/router");
const mongoose = require('mongoose');
const PORT = process.env.PORT;
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use('/api',router);

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log("MongoDB is connected");

        app.listen(8000, () => console.log(`Server started on PORT = ${8000}`))
    } catch (e) {
        console.log(e);
    }
}

start()