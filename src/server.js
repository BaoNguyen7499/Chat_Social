import express from "express";
import ConnectDB from "./config/connectDB";
import configViewEngine from "./config/viewEngine";
import initRoutes from "./routes/web";
import bodyParser from "body-parser";
import connectFlash from "connect-flash";
import configSession from "./config/session";
import passport from "passport";
import pem from "pem";
import https from "https";

// pem.createCertificate({ days: 1, selfSigned: true }, function(err, keys) {
//     if (err) {
//         throw err
//     }

//     // init app
//     let app = express();

//     // connect to mongodb
//     ConnectDB();

//     // config session
//     configSession(app);

//     // config view engine
//     configViewEngine(app);

//     // enable post data for req body parser
//     app.use(bodyParser.urlencoded({ extended: true }));

//     // enable flash messages
//     app.use(connectFlash());

//     // config passport js
//     app.use(passport.initialize());
//     app.use(passport.session());

//     // init all routes
//     initRoutes(app);
//     let port = 3300;
//     let hostname = 'localhost';
//     https.createServer({ key: keys.serviceKey, cert: keys.certificate }, app).listen(port, hostname, () => {
//         console.log(`Example app listening at ${hostname}:${port}/`)
//     });
// })

// init app
let app = express();

// connect to mongodb
ConnectDB();

// config session
configSession(app);

// config view engine
configViewEngine(app);

// enable post data for req body parser
app.use(bodyParser.urlencoded({ extended: true }));

// enable flash messages
app.use(connectFlash());

// config passport js
app.use(passport.initialize());
app.use(passport.session());

// init all routes
initRoutes(app);

let port = 3300;
let hostname = 'localhost';


app.listen(port, hostname, () => {
    console.log(`Example app listening at ${hostname}:${port}/`)
});