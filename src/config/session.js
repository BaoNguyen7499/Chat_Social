import session from "express-session";
import connectMongo from "connect-mongo";

let mongoStore = connectMongo(session);
let DB_CONNECTION = "mongodb";
let DB_HOST = "localhost";
let DB_PORT = 27017;
let DB_NAME = "chat_social";
// this variable is where save session, in the case is mongodb
let sessionStore = new mongoStore({
    url: `${DB_CONNECTION}://${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    autoReconnect: true,
    // autoRemove: "native",
});

// Config session for app

let configSession = (app) => {
    app.use(session({
        key: "express.sid",
        secret: "mySecret",
        store: sessionStore,
        resave: true,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24, // 1 ngay
        },
    }));
};

module.exports = configSession;