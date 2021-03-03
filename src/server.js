import express from "express";
import ConnectDB from "./config/connectDB";
import configViewEngine from "./config/viewEngine";

// init app
let app = express();

// connect to mongodb
ConnectDB();

// config view engine
configViewEngine(app);

let port = 3300;
let hostname = 'localhost';

app.get('/', (req, res) => {
    return res.render('main/master')
});
app.get('/login-register', (req, res) => {
    return res.render('auth/loginRegister')
});
app.listen(port, hostname, () => {
    console.log(`Example app listening at ${hostname}:${port}/`)
});