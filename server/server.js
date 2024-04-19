require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const router = require("./jwtToken/router/router")
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use('/api',router);
const uri = "mongodb+srv://bakytbekovnurdin7:nurdin@cluster0.drx3qxd.mongodb.net/?retryWrites=true&w=majority"


const start = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

start()