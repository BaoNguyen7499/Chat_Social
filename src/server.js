import express from "express";
import ConnectDB from "./config/connectDB";
import configViewEngine from "./config/viewEngine";
import initRoutes from "./routes/web";

// init app
let app = express();

// connect to mongodb
ConnectDB();

// config view engine
configViewEngine(app);

// init all routes
initRoutes(app);

let port = 3300;
let hostname = 'localhost';


app.listen(port, hostname, () => {
    console.log(`Example app listening at ${hostname}:${port}/`)
});