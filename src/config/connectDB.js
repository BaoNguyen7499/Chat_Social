import mongoose from "mongoose";
import bluebird from "bluebird";

// Connect to mongodb

let connectDB = () => {
    mongoose.Promise = bluebird;

    let DB_CONNECTION = "mongodb";
    let DB_HOST = "localhost";
    let DB_PORT = 27017;
    let DB_NAME = "chat_social";
    let DB_USERNAME = "";
    let DB_PASSWORD = "";
    // config admin email account
    let MAIL_USER = "nguyenphucbao07041999@gmail.com";
    let MAIL_PASSWORD = "Baonguyen741999@!";
    let MAIL_HOST = "smtp.gmail.com";
    let MAIL_PORT = "587";
    // mongodb://localhost:27017/social_chat
    let URI = `${DB_CONNECTION}://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

    return mongoose.connect(URI, { useMongoClient: true });
};

module.exports = connectDB;